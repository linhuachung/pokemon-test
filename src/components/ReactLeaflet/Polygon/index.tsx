import { AreaFly } from '@/interfaces';
import { LatLngExpression, PathOptions } from 'leaflet';
import React, { FC, ReactNode } from 'react';
import { Polygon, PolygonProps } from 'react-leaflet';
import styled from 'styled-components';

const PolygonStyled = styled(Polygon)`
  rect {
    fill: rgba(255, 248, 126, 0.2);
  }
`;

interface IPolygonProps extends PolygonProps {
  children?: ReactNode;
  positions: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  pathOptions?: PathOptions;
  typeAreaFly: AreaFly;
}
const PolygonCustom: FC<IPolygonProps> = ({
  children,
  positions = [],
  pathOptions,
  typeAreaFly = 'allow',
}) => {
  const configPathOptions = () => {
    switch (typeAreaFly) {
      case 'allow':
        return {
          color: '#51ff58',
          weight: 2,
          ...pathOptions,
        };
      case 'warning':
        return {
          weight: 2,
          color: '#f3ff45',
          pathOptions,
        };
      case 'banned':
        return {
          weight: 2,
          color: '#ff4545',
          pathOptions,
        };
      default:
        return {
          color: '#51ff58',
          weight: 2,
          ...pathOptions,
        };
    }
  };

  return (
    <PolygonStyled positions={positions} pathOptions={configPathOptions()}>
      {children}
    </PolygonStyled>
  );
};

export default PolygonCustom;
