import { Model } from '@redux-model/react';
import sleep from 'sleep-promise';
import { $api } from '../services/api';

interface Data {
  id: string;
  homepage: string;
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
      state.id = reactResult.response._id;
      state.homepage = vueResult.response.homepage;
    });
  });

  reset() {
    this.resetReducer();
  }

  protected initReducer(): Data {
    return {
      id: '-',
      homepage: '-',
    };
  }
}

export const composeModel = new ComposeModel();
