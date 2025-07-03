import React, { Component } from "react";
import styles from "./condition.module.scss";
import PropTypes from "prop-types";

class Condition extends Component {
  render() {
    const successful = <h2 className={styles.successful}>Successful</h2>;
    const failed = <h2 className={styles.failed}>Failed</h2>;

    return this.props.state ? successful : failed;
  }
}

Condition.propTypes = {
    state: PropTypes.bool.isRequired
};

export default Condition;