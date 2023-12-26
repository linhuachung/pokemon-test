import { LatLngExpression } from 'leaflet';
import React, { FC, ReactNode } from 'react';
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const MapContainerStyled = styled(MapContainer)``;

interface IMapContainerProps extends MapContainerProps {
  children?: ReactNode;
  zoom: number;
  center: LatLngExpression;
  props?: any;
  [key: string]: any;
}
const MapContainerCustom: FC<IMapContainerProps> = ({
  center,
  zoom = 13,
  children,
  ...props
}) => {
  return (
    <MapContainerStyled zoom={zoom} center={center} {...props}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {children}
    </MapContainerStyled>
  );
};

export default MapContainerCustom;
