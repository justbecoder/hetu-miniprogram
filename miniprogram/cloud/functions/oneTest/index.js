/** 该文件由源码编译生成，请勿直接修改该文件 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cloud = require('wx-server-sdk');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloud__default = /*#__PURE__*/_interopDefaultLegacy(cloud);

cloud__default["default"].init({
    // @ts-ignore
    env: cloud__default["default"].DYNAMIC_CURRENT_ENV,
});
var TypeSex;
(function (TypeSex) {
    TypeSex[TypeSex["MALE"] = 1] = "MALE";
    TypeSex[TypeSex["FEMALE"] = 0] = "FEMALE";
})(TypeSex || (TypeSex = {}));
const main = async (event, context) => {
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

exports.main = main;
