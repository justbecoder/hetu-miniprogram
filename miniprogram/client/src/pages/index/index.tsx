import { Component, PropsWithChildren } from 'react';
import Taro, { Config, cloud } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import './index.css';

export default function Index() {
  return (
    <View className="w-full min-h-full flex justify-center items-center">
      <Button
        type="primary"
        // className="mt-[200px]"
        onClick={() => {
          console.log('this is a test!');
        }}
      >
        Tailwindcss!!
      </Button>
    </View>
  );
}
