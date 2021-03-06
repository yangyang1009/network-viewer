import React from 'react';
import { mount } from 'enzyme';

import ReqDetailContainer from './../../../src/Containers/ReqDetailContainer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('ReqDetailContainer', () => {
  it('renders without crashing', () => {
    mount(
      <NetworkProvider>
        <ReqDetailContainer />
      </NetworkProvider>,
    );
  });
});
