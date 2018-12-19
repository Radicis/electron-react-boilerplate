// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Content from '../components/content';

const styles = () => ({
  container: {
    height: '100%'
  }
});

type Props = {
  classes: object
};

class Content extends Component<Props> {
  props: Props;

  state = {};

  render() {
    const { classes } = this.props;
    const {} = this.state;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Content />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(_.assign({}), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(QueueMonitor));