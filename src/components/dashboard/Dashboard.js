import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    const authNotifications = !auth.uid ? (
      <div className="section">
        <div className="dashboard">
          <div className="card card-height z-de">
            <div className="card-content">
              <h1 className="center text-white">Welcome to TestPlan</h1>
              <p className="center text-white">
                A place to have fun and learn about stuff.
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    );
    return <div className="container">{authNotifications}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(Dashboard);
