import { HttpService } from '@redux-model/react';

export const $api = new HttpService({
  baseUrl: 'https://registry.npm.taobao.org',
  headers: () => {
    return {
      Accept: 'application/json',
    };
  },
  onRespondError() {},
  onShowSuccess() {},
  onShowError() {},
});
