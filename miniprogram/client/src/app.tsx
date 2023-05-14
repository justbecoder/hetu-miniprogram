import { Component, PropsWithChildren } from 'react'
import Taro, { Config, cloud } from '@tarojs/taro'

import './app.css';

if (process.env.TARO_ENV === 'weapp') {
  cloud.init();
}

export default function App (props) {
  return  props.children;
}
