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
      <p>{data.id}</p>
      <p>{data.homepage}</p>
    </div>
  );
};

export default Logic;
