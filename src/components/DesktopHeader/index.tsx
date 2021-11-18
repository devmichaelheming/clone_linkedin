import React from 'react';

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CareDownIcon,
} from './styles';

export function DesktopHeader(){
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="pesquisar"/>
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/devmichaelheming.png"/>
              <span>Eu <CareDownIcon /></span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}