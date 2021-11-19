import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import {
  Container
} from './styles';

export function LoadingFeedShare(){
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="row-skeleton"/>
        <Skeleton className="row-skeleton"/>
      </Panel>
    </Container>
  );
}