import React, { FC } from 'react';
import center from '../../styles/center.scss';
import styleButton from '../../styles/button.scss';
import { composeModel } from '../../models/ComposeModel';

const Logic: FC = () => {
  const data = composeModel.useData();
  const loading = composeModel.multipleFetch.useLoading();

  return (
    <div className={center.center}>
      <div className={styleButton.button} onClick={() => composeModel.multipleFetch()}>React + Vue</div>
      <br />
      <div className={styleButton.button} onClick={() => composeModel.reset()}>Reset</div>
      <br />
      <p style={{ color: 'green', fontWeight: 'bold' }}>{loading ? 'Loading...' : ''}&nbsp;</p>
      <p>{data.react.id || '-'}: {data.react.homepage || '-'}</p>
      <p>{data.vue.id || '-'}: {data.vue.homepage || '-'}</p>
    </div>
  );
};

export default Logic;
