export const WX_ACCESS_TOKEN = 'wx_access_token';
export const WX_URL_PREFIX = 'https://api.weixin.qq.com';
export const WX_URLS = {
  accessToken: WX_URL_PREFIX + '/cgi-bin/token',
  // 集合操作相关
  collection: {
    get: WX_URL_PREFIX + '/tcb/databasecollectionget',
    add: WX_URL_PREFIX + '/tcb/databasecollectionadd',
    delete: WX_URL_PREFIX + '/tcb/databasecollectiondelete',
  },

  /**
   * @description 触发云函数相关
   */
  cloudFunction: {
    invoke: WX_URL_PREFIX + '/tcb/invokecloudfunction',
  },

  /**
   * @description 文档/记录操作相关
   */
  doc: {
    query: WX_URL_PREFIX + '/tcb/databasequery',
    update: WX_URL_PREFIX + '/tcb/databaseupdate',
    delete: WX_URL_PREFIX + '/tcb/databasedelete',
    add: WX_URL_PREFIX + '/tcb/databaseadd',
  },

  /**
   * @description 聚合
   */
  aggregate: {
    query: WX_URL_PREFIX + '/tcb/databaseaggregate',
  },
};

export const a = 10;
