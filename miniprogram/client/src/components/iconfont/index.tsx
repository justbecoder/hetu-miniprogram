/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'field-number' | 'bulb' | 'car' | 'check' | 'chrome' | 'clear' | 'clock-circle' | 'close' | 'edit-square' | 'control' | 'detail' | 'adduser' | 'deleteteam' | 'deleteuser' | 'addteam' | 'solution' | 'bell' | 'home' | 'rocket' | 'contacts' | 'carryout' | 'calendar-check' | 'calendar' | 'scan' | 'cloud-download' | 'sound' | 'check-circle' | 'close-circle' | 'logout' | 'setting' | 'location' | 'notification' | 'export' | 'Import' | 'user' | 'team' | 'heart' | 'block' | 'star' | 'edit' | 'phone' | 'tag' | 'right' | 'left' | 'up' | 'down' | 'fullscreen' | 'crown' | 'thunderbolt' | 'close-circle-fill' | 'sketch' | 'plus' | 'send';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
