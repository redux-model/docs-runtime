import { Model } from '@redux-model/react';

interface Data {
  counter: number;
}

class NormalModel extends Model<Data> {
  increase = this.action((state, step: number = 1) => {
    state.counter += step;
  });

  protected initReducer(): Data {
    return {
      counter: 0,
    };
  }
}

export const normalAction = new NormalModel();
