import React from 'react';

import Skeleton from "../../Skeleton";

import {
  Container
} from './styles';

export function LoadingTrendingPanel(){
    return (
        <Container>
            <div className="row">
                <Skeleton className="square-skeleton white" />

                <div className="column">
                <Skeleton className="row-skeleton white" />
                <Skeleton className="row-skeleton white" />
                </div>
            </div> 
            <div className="row">
                <Skeleton className="square-skeleton white" />

                <div className="column">
                <Skeleton className="row-skeleton white" />
                <Skeleton className="row-skeleton white" />
                </div>
            </div> 
            <div className="row">
                <Skeleton className="square-skeleton white" />

                <div className="column">
                <Skeleton className="row-skeleton white" />
                <Skeleton className="row-skeleton white" />
                </div>
            </div> 
        </Container>
    );
}