import { Model } from '@redux-model/react';
import sleep from 'sleep-promise';
import { $api } from '../services/api';

interface Data {
  react: Partial<{
    id: string;
    homepage: string;
  }>;
  vue: Partial<{
    id: string;
    homepage: string;
  }>;
}

interface Response {
  _id: string;
  license: string;
  homepage: string;
}

class ComposeModel extends Model<Data> {
  getInfo = $api.action((pkgName: string) => {
    return this
      .get<Response>('/' + pkgName);
  });

  multipleFetch = this.compose(async () => {
    const reactResult = await this.getInfo('react');
    const vueResult = await this.getInfo('vue');
    await sleep(100);

    this.changeReducer((state) => {
      state.react = {
        id: reactResult.response._id,
        homepage: reactResult.response.homepage,
      };
      state.vue = {
        id: vueResult.response._id,
        homepage: vueResult.response.homepage,
      };
    });
  });

  reset() {
    this.resetReducer();
  }

  protected initReducer(): Data {
    return {
      react: {},
      vue: {},
    };
  }
}

export const composeModel = new ComposeModel();
