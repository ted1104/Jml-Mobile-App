import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
  isLogged,
  setProfileUser,
} from './../../store/reducers/users/users.actions';
import {connect} from 'react-redux';
import Input from './../reusables/input';
import Buttom from './../reusables/button';
import Loading from './../reusables/loading';
import {login} from './../../api/db';
import Alert from './../reusables/alert';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,

      //CONFIG POPUP
      isType: null, //1 : success, 0 : failed
      messageError: null,

      //CONFIG LOAD
      isLoading: false,
    };

    // console.log(this.props);
  }
  _loginFx = () => {
    this.setState({isLoading: !this.state.isLoading});
    login(this.state.username, this.state.password)
      .then((res) => {
        if (res.data.message == null) {
          this.setState({isLoading: !this.state.isLoading});
          this.props.isLog(res.data.isLoggedIn);
          this.props.setDataProfile(res.data.data);

          return;
        }
        this._setErrorParams(0, res.data.message);
        this.setState({isLoading: !this.state.isLoading});
      })
      .catch((error) => console.log(`Erreur request ${error}`));
  };

  _hanldeChange = (key, val) => {
    this.setState({[key]: val});
  };

  _setErrorParams = (isType, messageError) => {
    this.setState({isType: isType});
    this.setState({messageError: messageError});
    this.timerID = setTimeout(() => {
      this.setState({isType: null});
      clearTimeout(this.timerID);
    }, 3000);
  };
  _showMessageAlerte = () => {
    if (this.state.isType != null)
      return (
        <Alert isType={this.state.isType}>{this.state.messageError}</Alert>
      );
  };
  render() {
    return (
      <View style={styles.containermain}>
        <View style={styles.container}>
          <View style={styles.containerTilte}>
            <Text style={styles.title}>JML SYSTEM</Text>
            <Text style={styles.titleSecond}>Se connecter !</Text>
          </View>
          <View style={styles.containerBloc}>
            <Input
              placeholder="Nom d'utilisateur"
              onChangeText={(val) => this._hanldeChange('username', val)}
            />
            <Input
              placeholder="Mot de passe"
              secureTextEntry={true}
              onChangeText={(val) => this._hanldeChange('password', val)}
            />
            {!this.state.isLoading ? (
              <Buttom onPress={this._loginFx}>
                <Text>Connexion</Text>
              </Buttom>
            ) : (
              <Loading size={50} />
            )}

            {/* <TouchableOpacity onPress={() => console.log('Her')}>
            <Text style={styles.textBtn}>HH</Text>
          </TouchableOpacity> */}
          </View>
        </View>

        {/* SHOW ERROR MESSAGE */}
        {this._showMessageAlerte()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containermain: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  containerTilte: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // marginBottom: 20,
  },
  containerBloc: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    marginBottom: 2,
    color: '#0096c7',
  },
  titleSecond: {
    fontSize: 20,
    color: '#0096c7',
    // marginBottom: 2,
  },
});
// const mapDispatch
const mapToDispatchToProps = (dispatch) => ({
  isLog: (item) => dispatch(isLogged(item)),
  setDataProfile: (item) => dispatch(setProfileUser(item)),
});
const mapStateToProps = (state) => ({
  usersState: state,
});
export default connect(mapStateToProps, mapToDispatchToProps)(LoginScreen);
