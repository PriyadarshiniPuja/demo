import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import { fetchData } from '../actions';

import Sidebar from './Sidebar';
import ListPage from './ListPage';

const HomePage = (props) => {
  const [successLaunch, setsuccessLaunch] = useState();
  const [successLanding, setsuccessLanding] = useState();
  const [launchYear, setlaunchYear] = useState();

  const loadData = () => {
    const { search } = props.location;
    fetchData(search);
  };

  const handleSuccessLaunch = (flag) => {
    setsuccessLaunch(flag);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filter = {};
    if (successLaunch != undefined) {
      filter.launch_success = successLaunch;
    }
    if (successLanding != undefined) {
      filter.land_success = successLanding;
    }
    if (launchYear != undefined) {
      filter.launch_year = launchYear;
    }

    loadData();
  }, [successLaunch, successLanding, launchYear]);

  const handleSuccessLanding = (flag) => {
    setsuccessLanding(flag);
  };

  const handleLaunchYear = (year) => {
    setlaunchYear(year);
  };

  const { fetchData } = props;
  return (
    <div className="row main-wrap">
      <Sidebar
        handleSuccessLaunch={handleSuccessLaunch}
        handleSuccessLanding={handleSuccessLanding}
        handleLaunchYear={handleLaunchYear}
        successLaunch={successLaunch}
        successLanding={successLanding}
        launchYear={launchYear}
        loadData={loadData}
      />
      <ListPage items={props.items} loading={props.loading} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.appReducer?.items || [],
    loading: state.appReducer.loading,
    error: state.appReducer.error,
  };
};

HomePage.propTypes = {
  spacexData: PropTypes.arrayOf(PropTypes.any),
  fetchData: PropTypes.func,
};

HomePage.defaultProps = {
  spacexData: [],
  fetchData: null,
};

export default {
  component: connect(mapStateToProps, { fetchData })(HomePage),
  fetchData,
};
