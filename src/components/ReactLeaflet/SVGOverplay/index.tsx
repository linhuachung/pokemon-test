import { AreaFly } from '@/interfaces';
import { LatLngBoundsLiteral } from 'leaflet';
import React, { FC, ReactNode } from 'react';
import { SVGOverlay, SVGOverlayProps } from 'react-leaflet';
import styled from 'styled-components';

type SVGOverplayStyledType = {
  $typeAreaFlyStyled: string;
};

const SVGOverplayStyled = styled(SVGOverlay)<SVGOverplayStyledType>`
  rect {
    ${(props: any) => {
      switch (props.$typeAreaFlyStyled) {
        case 'allow':
          return { fill: 'rgba(81,255,88,0.2)' };
        case 'warning':
          return { fill: 'rgba(243,255,69,0.2)' };
        case 'banned':
          return { fill: 'rgba(255,69,69,0.2)' };
        default:
          return { fill: 'rgba(81,255,88,0.2)' };
      }
    }}
  }
`;

interface ISVGOverplayProps extends SVGOverlayProps {
  children?: ReactNode;
  attributes?: any;
  bounds: LatLngBoundsLiteral;
  typeAreaFly: AreaFly;

  [key: string]: any;
}

const SVGOverlayCustom: FC<ISVGOverplayProps> = ({
  children,
  bounds,
  attributes,
  typeAreaFly = 'allow',
}) => {
  const configAttributes = () => {
    switch (typeAreaFly) {
      case 'allow':
        return {
          weight: 2,
          color: '#51ff58',
          stroke: '#51ff58',
          ...attributes,
        };
      case 'warning':
        return {
          weight: 2,
          color: '#f3ff45',
          stroke: '#f3ff45',
          ...attributes,
        };
      case 'banned':
        return {
          weight: 2,
          color: '#ff4545',
          stroke: '#ff4545',
          ...attributes,
        };
      default:
        return {
          color: '#51ff58',
          stroke: '#51ff58',
          weight: 2,
          ...attributes,
        };
    }
  };
  return (
    <SVGOverplayStyled
      bounds={bounds}
      attributes={configAttributes()}
      $typeAreaFlyStyled={typeAreaFly}
    >
      <rect x='0' y='0' width='100%' height='100%' />
      {children}
    </SVGOverplayStyled>
  );
};

export default SVGOverlayCustom;
