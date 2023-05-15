import { Component, PropsWithChildren } from 'react';
import Taro, { Config, cloud } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function Index() {
  return (
    <View
      className="w-full"
      onClick={async () => {
        const result = await cloud.callFunction({
          name: 'oneTest',
        });

        console.log(1232131, result);
      }}
    >
      欢迎使用....tailwindcss
    </View>
  );
}
