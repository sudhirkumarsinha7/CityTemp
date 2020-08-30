/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import {
  View,
  Modal,
  FlatList,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import BarCodeScanner from '../common/BarCodeScanner';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CityTempRequest, actions as tempAction} from '../../actions/cityTemp';
import {createProgressSelector} from '../../common/ReduxSelectors';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClearClicked = this.onClearClicked.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onSuccessScan = this.onSuccessScan.bind(this);
    this.troubleShootCamera = this.troubleShootCamera.bind(this);
    this.loadScannerRef = this.loadScannerRef.bind(this);
    this.stateUpdater = this.stateUpdater.bind(this);
    this.state = {
      shouldDisplayCamera: false,
    };
  }
  onClearClicked() {
    this.setState({
      name: '',
      id: '',
      location: {},
    });
  }
  updateState(key, value) {
    this.setState({[key]: value});
  }
  onClickCameraToScanCode() {
    this.setState({shouldDisplayCamera: true});
  }
  onSuccessScan(scannedData) {
    if (scannedData && scannedData.data) {
      this.setState({
        qrcode: scannedData.data,
        shouldDisplayCamera: false,
      });
      this.props.CityTempRequest(scannedData.data);
    } else if (scannedData && scannedData.data === '') {
      alert('Invalid QR Code.');
    } else {
      this.scanner.reactivate();
    }
  }

  troubleShootCamera() {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      // permission granted
      Alert.alert(
        'Troubleshooting Camera',
        'Troubleshooting completed, Please hold the device steadily and try again.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
    if (this.codeScannerRef && this.codeScannerRef) {
      // todo: called RNCamera refresh function
    }
    this.scanner && this.scanner.reactivate();
  }
  loadScannerRef(node) {
    this.scanner = node;
  }
  stateUpdater(newState) {
    this.setState(newState);
  }
  scanCity() {
    this.props.navigation.navigate('QRCodeScanner');
  }
  getCityTem() {
    var {cityTempList} = this.props;
    if (cityTempList.length > 0) {
      if (cityTempList[0].empty) {
        return (
          <View style={[styles.positionCenter, {marginTop: 10}]}>
            <Text style={[{fontSize: 18}]}>No data available</Text>
          </View>
        );
      } else {
        return (
          <FlatList
            data={cityTempList}
            renderItem={({item}) => <View>{this.tempData(item)}</View>}
            keyExtractor={(items, index) => items.id}
          />
        );
      }
    } else {
      return (
        <FlatList
          data={[{empty: 'key1'}]}
          renderItem={({item}) => (
            <View style={[styles.positionCenter, {marginTop: 10}]}>
              <Text style={[{fontSize: 18}]}>No data available</Text>
            </View>
          )}
          keyExtractor={(item) => item.empty}
        />
      );
    }
  }
  renderEachRow(leftText, rightText) {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 0.4, padding: 10}}>
          <Text>{leftText}</Text>
        </View>
        <View style={{flex: 0.6, padding: 10}}>
          <Text>{rightText}</Text>
        </View>
      </View>
    );
  }
  tempData = (cityTemp) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderBottomWidth: 0.5,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {this.renderEachRow(
            'City : ',
            cityTemp && cityTemp.name ? cityTemp.name : 'City Not',
          )}
          {this.renderEachRow(
            'CurrentTemp : ',
            cityTemp && cityTemp.main && cityTemp.main.temp
              ? Math.round(cityTemp.main.temp - 273.15) + '°C'
              : 'NA',
          )}
        </View>
      </View>
    );
  };
  render() {
    var {shouldDisplayCamera} = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Temperature</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.onClickCameraToScanCode();
              }}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>
        <Content>
          {this.props.isLoading && (
            <View>
              <ActivityIndicator size="large" color="#2394C7" />
            </View>
          )}
          {this.getCityTem()}
          {shouldDisplayCamera && (
            <Modal
              animationType="slide"
              transparent={false}
              visible={shouldDisplayCamera}
              onRequestClose={() => {
                this.setState({shouldDisplayCamera: !shouldDisplayCamera});
              }}>
              <BarCodeScanner
                onSuccessScan={this.onSuccessScan}
                troubleShootCamera={this.troubleShootCamera}
                ref={(codeScannerRef) => {
                  this.codeScannerRef = codeScannerRef;
                }}
                scanner={this.loadScannerRef}
                stateUpdater={this.stateUpdater}
                state={this.state}
              />
            </Modal>
          )}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Developed by : Sudhir Kumar</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const progressSelector = createProgressSelector([tempAction.CITY_TEMP_REQUEST]);
function mapStateToProps(state: ReduxStore): StateToProps {
  return {
    isLoading: progressSelector(state),
    cityTempList: state.auth.cityTempList,
  };
}

function mapDispatchToProps(dispatch): DispatchToProps {
  return {
    CityTempRequest: bindActionCreators(CityTempRequest, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
const styles = StyleSheet.create({
  positionCenter: {justifyContent: 'center', alignItems: 'center'},
  bodyView: {
    flex: 1,
    padding: 5,
  },
});
