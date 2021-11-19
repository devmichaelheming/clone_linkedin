import React, { useState, useEffect } from 'react';

import {
  Container,
} from './styles';

import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import AdBanner from "../AdBanner";
import { MobileHeader } from "../MobileHeader";
import { DesktopHeader } from "../DesktopHeader";

export function Layout(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>
        {!isLoading && <AdBanner />}
      </span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
}