import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as rootActions, NAME as ROOT_NAME } from "../";
import Ticker from "../../Ticker/containers/Ticker";

const mapStateToProps = state => {
  return {
    ...state[ROOT_NAME]
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...rootActions
    },
    dispatch
  );

class RootContainer extends Component {
  componentDidMount() {
    const { connect } = this.props;
    connect();
  }
  render() {
    return (
      <div>
        <table width="100%">
          <tbody>
            <tr>
              <td>
                <Ticker />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
