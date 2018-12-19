// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {bindActionCreators} from "redux";
import _ from "lodash";

import * as OptionsActions from "../actions/options";

import AppHeaderContainer from './AppHeaderContainer';

type Props = {
  options: object,
  menuCollapsed: boolean,
  getOptionsFromStore: () => void,
  children: React.Node
};

const primary = {
  light: '#03A9F4',
  main: '#607D8B',
  dark: '#455A64',
  contrastText: '#212121'
};

const secondary = {
  light: '#89e9ff',
  main: '#03A9F4',
  dark: '#026a99',
  contrastText: '#fff'
};

class AppContainer extends Component<Props> {
  props: Props;

  state = {
    theme: createMuiTheme({
      palette: {
        type: 'light',
        primary,
        secondary
      }
    })
  };

  componentWillMount() {
    const {getOptionsFromStore, options} = this.props;
    getOptionsFromStore();
    const updatedTheme = {
      palette: {
        type: options.lightTheme ? 'light' : 'dark',
        primary,
        secondary
      }
    };
    this.setState({
      theme: createMuiTheme(updatedTheme)
    })
  }

  componentDidUpdate() {
    const {options} = this.props;
    const {theme} = this.state;

    const updatedType = options.lightTheme ? 'light' : 'dark';

    const updatedTheme = createMuiTheme({
      palette: {
        type: updatedType,
        primary,
        secondary
      }
    });
    if (theme.palette.type !== updatedType) {
      this.setState({
        theme: createMuiTheme(updatedTheme)
      })
    }
  }

  render() {
    const {children, options, menuCollapsed} = this.props;
    const {theme} = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <AppHeaderContainer options={options} menuCollapsed={menuCollapsed} />
        <React.Fragment>{children}</React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  options: state.options.options,
  menuCollapsed: state.options.menuCollapsed
});

const mapDispatchToProps = (dispatch) => (bindActionCreators(_.assign({}, OptionsActions), dispatch));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);