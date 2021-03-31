import React, {Component} from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  ViewBase,
  FlatList,
} from 'react-native';
import Entete from './../reusables/Entente';
import Input from './../reusables/input';
import Pannier from '../reusables/pannier';
import RoundBouton from './../reusables/RoundButton';
import Empty from './../reusables/empty';
import Alert from './../reusables/alert';
import SelectInput from './../reusables/selectInput';
// import PANNIER_DATA from './../../api/pannier';
import {getDateToday} from './../helpers/helpers';
import {getCreateLineArticle} from './../../api/db';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPannier: [],
      date: getDateToday(),
      lieu: null,
      chauffeur: null,
      telChauffeur: null,
      plaque: null,
      codeArticle: null,
      qte: 0,

      //CONFIG POPUP
      isType: null, //1 : success, 0 : failed
      messageError: null,
    };
    this.dataPannierArt = [];
    this.timerID;
  }
  _addArticle = () => {
    getCreateLineArticle(this.state.codeArticle, this.state.qte, 6).then(
      (res) => {
        if (res.data.message.success != null) {
          this.dataPannierArt.push({
            article: res.data.data.nom_article,
            code_article: res.data.data.code,
            qte: res.data.data.qte,
          });
          this.setState({dataPannier: this.dataPannierArt});
          this.setState({
            codeArticle: null,
            qte: 0,
          });
          this._setErrorParams(1, res.data.message.success);
          return;
        }
        this._setErrorParams(0, res.data.message.errors);
      },
    );
  };
  _handleChange = (key, val) => {
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

  componentDidMount() {
    console.log(this.state.date);
  }
  render() {
    // console.log('--render--');
    return (
      <View style={styles.container}>
        <Entete props={this.props}>
          <Text>AJOUTER EXPEDITION</Text>
        </Entete>
        {/* CORPS */}
        <View style={styles.b2}>
          <ScrollView>
            <View style={styles.form}>
              <Input placeholder="Date" value={this.state.date.toString()} />

              <SelectInput />
              <Input
                placeholder="Nom Chauffeur"
                onChangeText={(val) => this._handleChange('chauffeur', val)}
                value={this.state.chauffeur}
              />
              <Input
                placeholder="Tél Chauffeur"
                onChangeText={(val) => this._handleChange('telChauffeur', val)}
                value={this.state.telChauffeur}
              />
              <Input
                placeholder="Plaque vehicule"
                onChangeText={(val) => this._handleChange('plaque', val)}
                value={this.state.plaque}
              />
            </View>
            <View style={styles.formArticle}>
              <View style={styles.formCode}>
                <Input
                  placeholder="Code Article"
                  onChangeText={(val) => this._handleChange('codeArticle', val)}
                  value={this.state.codeArticle}
                />
              </View>
              <View style={styles.formQte}>
                <Input
                  placeholder="Quantité"
                  onChangeText={(val) => this._handleChange('qte', val)}
                  value={this.state.qte.toString()}
                />
              </View>
              <View style={styles.formBtn}>
                <RoundBouton onPress={this._addArticle}>
                  <Icon name="plus-thick" color="#fff" size={20} />
                </RoundBouton>
              </View>
            </View>

            <View style={styles.articleList}>
              <View style={styles.titleBloc}>
                <Text style={styles.titleTab}>Pannier des articles</Text>
              </View>
              <View style={styles.blocPannier}>
                {this.state.dataPannier.length < 1 ? (
                  <Empty />
                ) : (
                  this.state.dataPannier.map((item, idx) => (
                    <Pannier key={idx} data={item} />
                  ))
                )}
              </View>
            </View>
          </ScrollView>
        </View>

        {/* SHOW ERROR MESSAGE */}
        {this._showMessageAlerte()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  b2: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    paddingVertical: 35,
    paddingHorizontal: 15,
    // borderWidth: 1,
  },
  form: {
    // borderWidth: 1,
    paddingHorizontal: 5,
  },
  formArticle: {
    // borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  formQte: {
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
  },
  formCode: {
    flex: 1,
  },
  articleList: {
    paddingHorizontal: 5,
    marginTop: 5,
  },
  titleBloc: {
    // borderWidth : 1,
    flex: 1,
    alignItems: 'center',
  },
  titleTab: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#457b9d',
  },
  blocPannier: {
    marginTop: 10,
  },
});

export default HomeScreen;
