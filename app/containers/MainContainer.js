// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as OptionsActions from '../actions/options';

const styles = () => ({
  container: {
    borderRadius: 0
  }
});

type Props = {
  classes: object
};

class MainContainer extends Component<Props> {
  props: Props;

  state = {};

  render() {
    const { classes } = this.props;
    const {} = this.state;
    return <Paper className={classes.container}>Main</Paper>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(_.assign({}, OptionsActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MainContainer));
