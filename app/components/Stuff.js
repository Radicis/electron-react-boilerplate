// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';

const styles = () => ({});

type Props = {
  classes: object
};

class Stuff extends Component<Props> {
  props: Props;

  state = {};

  render() {
    const { classes } = this.props;
    const {} = this.state;
    return (
      <Typography variant="h6" color="inherit">
        Main
      </Typography>
    );
  }
}

export default withStyles(styles)(Stuff);
