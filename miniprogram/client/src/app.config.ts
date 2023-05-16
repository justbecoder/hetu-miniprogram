import { useGlobalIconFont } from './components/iconfont/helper.js';

export default {
  pages: ['pages/index/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  usingComponents: {
    ...useGlobalIconFont(),
  },
  cloud: true,
};
