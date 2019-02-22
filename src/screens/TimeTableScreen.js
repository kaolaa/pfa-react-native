import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {Colors, Fonts} from '../constants';
import { Button, RadioGroup, Dropdown } from '../components';
import {AsyncStorage} from 'react-native';
import axios from 'axios';


export default class ExampleThree extends Component {


  constructor(props) {
    super(props);
    this.state = {
       user:{},
      rowdata:[] ,
      tableHead: [
        '',
        'Seance 1\n 08:30   10:00',
        'Seance 2\n 10:15   12:45',
        'Seance 3\n 13:15   14:45',
        'Seance 4\n 15:00   16:30',
        'Seance 5\n 16:45   18:15',
      ],
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],

      tableData: [],
      widthArr: [80, 80, 80, 80, 80, 80],
    };
  }

  componentDidMount() {
   AsyncStorage.getItem("userID").then((value) => {
      const id = value 
      axios.get('http://192.168.1.6:5000/api/users/'+ id ).
      then(res => {
         this.setState({ user :res.data }); 
         console.log('hey user');
         axios.get('http://192.168.1.6:5000/api/seances').
         then(res => {
           this.setState({ rowdata :res.data });
           console.log('hey seance');
            const seances = this.sortSeances();
            this.setState({ tableData :seances});    
         })       
      })  
   }).done();
   
 

   
   // this.setState({ rowdata : teacherdata });
   // console.log('hey')
   //   console.log(this.state.rowdata)
   //  const seances = this.sortSeances();
   //  this.setState({ tableData :seances}); 

  }

  sortSeances() {
     if (this.state.user.role){
           const profile = this.state.user.role
            console.log(profile)
      if (profile!=="Etudiant"){
      console.log('hey got seance');
      const dataa =  require('../../teachertimetable.json');
      this.setState({ rowdata :dataa });
      console.log(this.state.rowdata);
     }
   }
     const  seances = this.state.rowdata
     console.log('RAW GARBAGE', seances);
     //  console.log(res.data)

    const lundi = seances.filter(s => s.jour === 'Lundi');
    const mardi = seances.filter(s => s.jour === 'Mardi');
    const mercredi = seances.filter(s => s.jour === 'Mercredi');
    const jeudi = seances.filter(s => s.jour === 'Jeudi');
    const vendredi = seances.filter(s => s.jour === 'Vendredi');
    const samedi = seances.filter(s => s.jour === 'Samedi');

    console.log('AFTER FILTERING...', {lundi,mardi,mercredi,jeudi,vendredi,samedi});
  
    const data = [];
    const dummySeance = '';
    for (let index = 0; index < 6; index++) {
      data.push([dummySeance, dummySeance, dummySeance, dummySeance, dummySeance, dummySeance]);
    }
    data[0][0] = 'Lundi' ;
    data[1][0] = 'Mardi' ;
    data[2][0] = 'Mercredi' ;
    data[3][0] = 'Jeudi' ;
    data[4][0] = 'Vendredi' ;
    data[5][0] = 'Samedi' ;

    lundi.forEach(seance => {
       if(seance.seance === 1) {
          data[0][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[0][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[0][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[0][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[0][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
    mardi.forEach(seance => {

       if(seance.seance === 1) {
          data[1][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[1][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[1][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[1][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[1][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
    mercredi.forEach(seance => {

       if(seance.seance === 1) {
          data[2][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[2][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[2][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[2][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[2][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
    jeudi.forEach(seance => {

       if(seance.seance === 1) {
          data[3][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[3][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[3][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[3][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[3][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
    vendredi.forEach(seance => {

       if(seance.seance === 1) {
          data[4][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[4][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[4][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[4][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[4][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
    samedi.forEach(seance => {

       if(seance.seance === 1) {
          data[5][1] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 2) {
          data[5][2] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 3) {
          data[5][3] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 4) {
          data[5][4] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
       if(seance.seance === 5) {
          data[5][5] = seance.matiere.nom + '\n' + seance.nomEnseignant  ;
       }
    });
  
    console.log('new seances data baby:', data);
  
    return data;

  }
  render() { 
    
    return (
      <View style={styles.container}>
          {/* <View style={styles.componentsSection}>
            <Text style={styles.componentSectionHeader}>Class 4iir 1</Text>

            <Dropdown
              style={{width: 200,height:40, alignSelf: 'center'}}
              onSelect={() => {}}
              items={['option 1', 'option 2']}
            />
          </View> */}
          <ScrollView horizontal={true}>

          <View>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={this.state.tableHead}
                widthArr={this.state.widthArr}
                style={styles.header}
                textStyle={styles.textheader}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: 'transparent'}}>
             

              {this.state.tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={this.state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#F7F6E7'},
                    ]}
                    textStyle={styles.text}
                  />
                ))}

        
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: {height: 30, backgroundColor: '#6271da', opacity: 0.5},
  componentsSection: {
    backgroundColor: Colors.white,
    padding: 5,
    marginBottom: 12,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: Fonts.primaryRegular,
    color: '#686868',
    fontSize: 12,
    marginBottom: 12,
  },
  textheader: {
    textAlign: 'center',
    fontFamily: Fonts.primaryBold,
    fontSize: 9,
    color: '#FFFFFF',
  },

  text: {textAlign: 'center', fontSize: 9, lineHeight: 13, paddingVertical: 16},
  dataWrapper: {marginTop: -1},
  row: {height: 80, backgroundColor: '#E7E6E1'},
});
