import cloud from 'wx-server-sdk';

cloud.init({
  // @ts-ignore
  env: cloud.DYNAMIC_CURRENT_ENV,
});

enum TypeSex {
  MALE = 1,
  FEMALE = 0,
}

export const main = async (event: any, context: any) => {
  console.log('any question OK? test');
  const manSex = 1;
  if (manSex === TypeSex.MALE) {
    console.log('男性');
  }

  return {
    code: 0,
    message: 'hi, i am success',
    sex: manSex === TypeSex.MALE ? '男性' : '女性',
  };
};
