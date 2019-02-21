import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {Colors, Fonts} from '../constants';
import { Button, RadioGroup, Dropdown } from '../components';

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        '',
        'Seance 1\n 08:30   10:00',
        'Seance 2\n 10:15   12:45',
        'Seance 3\n 13:15   14:45',
        'Seance 4\n 15:00   16:30',
        'Seance 5\n 16:45   18:15',
      ],
      widthArr: [80, 80, 80, 80, 80, 80],
    };
  }

  render() {
    const state = this.state;
    const tableData = [
      [
        'Lundi',
        "Systemes d'information geographique \nagdal - 4B\n8.30 - 10.00",
        "Systemes d'information geographique \nagdal\n4B",
        '',
        'administartion oracle\nbourgegrag\ncc3',
        'Etude de cas \nbourgegrag\ncc4',
      ],
      ['Mardi', 'JAVA Avancee\nbourgegrag\ncc1', 'JAVA Avancee\nbourgegrag\nLR', '', '', ''],
      ['Mercredi', 'Administration UNIX \nbourgegrag\ncc3', 'Atelier oracle\nbourgegrag\ncc1', '', '', ''],
      ['Jeudi', 'Droit des affaires\nbourgegrag\n4b', 'Anglais\nbourgegrag\n4b', 'Virtualisation\nbourgegrag\ncc3', '', ''],
      ['Vendredi', 'Gestion de projet\nbourgegrag\n6b', 'TEC\nbourgegrag\n4b', '', '', ''],
      ['Samedi', 'Reseaux haut debits\nbourgegrag\ncc3', '', '', '', ''],
    ];
    return (
      <View style={styles.container}>
          <View style={styles.componentsSection}>
            <Text style={styles.componentSectionHeader}>Class 4iir 1</Text>

            <Dropdown
              style={{width: 200,height:40, alignSelf: 'center'}}
              onSelect={() => {}}
              items={['option 1', 'option 2']}
            />
          </View>
          <ScrollView horizontal={true}>

          <View>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.textheader}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: 'transparent'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
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

// <View>
// <ScrollView >

//   <Grid>
//     <Col>
//       <Text>1</Text>
//     </Col>
//     <Col style={styles.col}>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//     </Col>

//     <Col style={styles.col}>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//     </Col>
//     <Col style={styles.col}>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//     </Col>
//     <Col style={styles.col}>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//       <Row style={styles.row}><Text>1</Text></Row>
//     </Col>
//   </Grid>
//   </ScrollView>
// </View>
