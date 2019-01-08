import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return <div />;
  }
}

ManageCoursePage.propTypes = {
  // sd
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    /*     actions: bindActionCreators(actions, dispatch)
     */
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
