import React from 'react';

import {
  Container,
} from './styles';

import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import { MobileHeader } from "../MobileHeader";
import { DesktopHeader } from "../DesktopHeader";

export function Layout(){
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
}