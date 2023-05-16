import { Component, PropsWithChildren } from 'react';
import Taro, { Config, cloud } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import colors from 'tailwindcss/colors';
import { IconFont } from '@/components';
import './index.css';

export default function Index() {
  return (
    <View className="w-full min-h-full flex justify-center items-center">
      <Button
        type="primary"
        onClick={() => {
          console.log('this is a test!');
        }}
      >
        <View className="w-full flex justify-center items-center">Tailwindcss!!</View>
      </Button>
      <IconFont name="calendar-check" size={40} color={colors.red[500]}></IconFont>
    </View>
  );
}
