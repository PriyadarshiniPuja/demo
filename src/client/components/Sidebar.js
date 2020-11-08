import React from 'react';
import { NavLink } from 'react-router-dom';

const launchLandData = {
  successfulLaunchLanding: [
    { label: 'True', value: true },
    { label: 'False', value: false },
  ],
  launchYear: [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ],
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { successLaunch, successLanding, launchYear } = this.props;

    return (
      <div className="col-md-2 col-sm-3">
        <div className="filter-container">
          <h4>Filters</h4>
          <div className="filters">
            <p> Launch Year</p>
            <div className="filter-wrap filter-year">
              {launchLandData.launchYear.map((data, index) => {
                return (
                  <NavLink
                    to={`/spacex?launch_year=${data}${
                      successLaunch != undefined ? `&launch_success=${successLaunch}` : ''
                    }${successLanding != undefined ? `&land_success=${successLanding}` : ''}`}
                    activeClassName={launchYear === data ? 'active' : ''}
                    key={data}
                  >
                    <button
                      className="btn"
                      onClick={(e) => {
                        this.props.handleLaunchYear(data);
                      }}
                    >
                      {data}
                    </button>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="filters">
            <p> Successful Launch</p>
            <div className="filter-wrap">
              {launchLandData.successfulLaunchLanding.map((data, index) => {
                return (
                  <NavLink
                    to={`/spacex?launch_success=${data.value}${
                      launchYear != undefined ? `&launch_year=${launchYear}` : ''
                    }${successLanding != undefined ? `&land_success=${successLanding}` : ''} `}
                    activeClassName={successLaunch === data.value ? 'active' : ''}
                    key={data.value}
                  >
                    <button
                      className="btn"
                      onClick={(e) => {
                        this.props.handleSuccessLaunch(data.value);
                      }}
                    >
                      {data.label}
                    </button>
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="filters">
            <p> Successful Landing</p>
            <div className="filter-wrap">
              {launchLandData.successfulLaunchLanding.map((data, index) => {
                return (
                  <NavLink
                    to={`/spacex?land_success=${data.value}${
                      launchYear != undefined ? `&launch_year=${launchYear}` : ''
                    }${successLaunch != undefined ? `&launch_success=${successLaunch}` : ''} `}
                    activeClassName={successLanding === data.value ? 'active' : ''}
                    key={data.value}
                  >
                    <button
                      className="btn"
                      onClick={(e) => {
                        this.props.handleSuccessLanding(data.value);
                      }}
                    >
                      {data.label}
                    </button>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
