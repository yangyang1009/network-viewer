import React from 'react';

import { useNetwork } from '../state/network/Context';
import FilterContainer from './FilterContainer';
import NetworkTableContainer from './NetworkTableContainer';
import LoaderContainer from '../Components/LoaderContainer';
import { FETCH_FILE_LOAD_TEXT } from '../constants';
import ReqDetailContainer from './ReqDetailContainer';
import Styles from './MainContainer.styles.scss';
import TimelineContainer from './TimelineContainer';

const MainContainer = () => {
  const { state } = useNetwork();
  const loading = state.get('loading');
  const selectedReqIndex = state.get('selectedReqIndex');
  const shouldShowDetail = selectedReqIndex || selectedReqIndex === 0;

  return (
    <>
      <FilterContainer />
      <LoaderContainer
        show={loading}
        text={FETCH_FILE_LOAD_TEXT}
      >
        <section className={Styles['main-container']}>
          <TimelineContainer />
          <NetworkTableContainer />
          {shouldShowDetail && <ReqDetailContainer />}
        </section>
      </LoaderContainer>
    </>
  );
};

export default MainContainer;
