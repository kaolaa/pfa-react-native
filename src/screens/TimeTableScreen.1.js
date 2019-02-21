import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [' ', '8', '9', '10','11','12','13','14','15','16','17','18',],
      tableTitle: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi','Vendredi','Samedi'],

      tableData: [
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['1', 'b', 'c', 'd'],
        ['1', 'b', 'c', 'd']

      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
             {/* <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/> */}
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
          {/* <Rows data={state.tableData} textStyle={styles.text}/> */}
        </Table>
      </View>
    )
  }

 
      

}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
});




