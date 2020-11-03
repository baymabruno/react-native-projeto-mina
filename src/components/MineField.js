import React from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './Field';

export default (props) => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });

    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ flexDirection: 'row' }} key={r}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: '#eee',
  },
});
