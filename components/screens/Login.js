import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Input from './../reusables/input';
import Buttom from './../reusables/button';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  _loginFx = () => {
    const action = {type: 'IS_LOGGED', value: !this.props.usersState.isLogged};
    this.props.dispatch(action);
    console.log(this.props);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTilte}>
          <Text style={styles.title}>JML SYSTEM</Text>
          <Text style={styles.titleSecond}>Se connecter !</Text>
        </View>
        <View style={styles.containerBloc}>
          <Input placeholder="Nom d'utilisateur" />
          <Input placeholder="Mot de passe" secureTextEntry={true} />
          <Buttom onPress={this._loginFx}>
            <Text>Connexion</Text>
          </Buttom>

          {/* <TouchableOpacity onPress={() => console.log('Her')}>
            <Text style={styles.textBtn}>HH</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
const mapStateToProps = (state) => ({
  usersState: state,
});
export default connect(mapStateToProps)(LoginScreen);
