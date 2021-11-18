import React from 'react';

import {
  Container,
  ProfileCircle,
  SearchInput,
  MessageIcon,
} from './styles';

export function MobileHeader(){
  return (
    <Container>
      <ProfileCircle src="https://github.com/devmichaelheming.png"/>
      <SearchInput placeholder="pesquisar"/>
      <MessageIcon />
    </Container>
  );
}