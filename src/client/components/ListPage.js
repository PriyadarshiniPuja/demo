import React from 'react';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
export default function ListPage({ items, loading }) {
  return (
    <>
      <div className="col-md-10 col-sm-9">
        <div className="row">
          {loading ? (
            <div className="text-center overlay">
              <div className="loaderContainer" />
            </div>
          ) : items?.length > 0 ? (
            items.map((item, index) => {
              return (
                <div className="col-lg-3 col-sm-6" key={`data${item.flight_number}`}>
                  <div className="spacex-card">
                    <div className="imageWrap">
                      <LazyLoadImage
                        alt={item.links.mission_patch}
                        src={item.links.mission_patch}
                        height="171"
                      />
                      {/* <img src={item.links.mission_patch} alt={item.links.mission_patch} /> */}
                    </div>
                    <div className="description">
                      <h4 className="title">
                        {item.mission_name} #{item.flight_number}
                      </h4>
                      {item.mission_id && item.mission_id.length ? (
                        <>
                          <p className="missions"> Mission ids:</p>

                          {item.mission_id.map((mission) => {
                            return (
                              <p className="mission-id" key={mission}>
                                {mission}
                              </p>
                            );
                          })}
                        </>
                      ) : null}

                      <div className="info">
                        <span>Launch Year: </span>
                        <span>{item.launch_year}</span>
                      </div>

                      <div className="info">
                        <span>Successful Launch: </span>
                        <span>{`${item?.launch_success ?? 'N/A'}`}</span>
                      </div>
                      {item?.rocket?.first_stage?.cores?.length > 0 &&
                      item.rocket.first_stage.cores[0]?.land_success &&
                      item.rocket.first_stage.cores[0]?.land_success !== 'null' ? (
                        <div className="info">
                          <span>Successful Landing: </span>
                          <span>{(item.rocket.first_stage.cores[0]?.land_success).toString()}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center notfound">No records found</div>
          )}{' '}
        </div>
      </div>
    </>
  );
}
