import React from 'react';
import styled from 'styled-components';

import Head from './Head';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 640px;
  padding: 80px 0;
  width: 90%;
`;

export default function() {
  return (
    <StyledApp>
      <Head />
      Hi, my name is Henry.
    </StyledApp>
  );
}
