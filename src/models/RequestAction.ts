import { Model } from '@redux-model/react';
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

class RequestModel extends Model<Data> {
  getInfo = $api.action((pkgName: string) => {
    return this
      .get<Response>('/' + pkgName)
      .onSuccess((state, action) => {
        state.id = action.response._id;
        state.homepage = action.response.homepage;
      });
  });

  protected initReducer(): Data {
    return {
      id: '-',
      homepage: '-',
    };
  }
}

export const requestAction = new RequestModel();
