import React, { Component } from 'react';
import AlertMessage from './AlertMessage';
import { connect } from 'react-redux';
import { deleteAlertMessage } from '../../actions/AlertActions';

class AlertList extends Component {

  removeAlert = (id) => {
    this.props.deleteAlertMessage(id)
  }

  render() {
    const alerts = this.props.alerts.map(alert => <AlertMessage key={alert.id} alert={alert} removeAlert={this.removeAlert}/>)
    return (
      <>
        { alerts }
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps, { deleteAlertMessage })(AlertList);
