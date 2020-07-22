import React, { FC } from 'react';
import center from '../../styles/center.scss';
import styleButton from '../../styles/button.scss';
import { requestModel } from '../../models/RequestModel';

const Logic: FC = () => {
  const data = requestModel.useData();
  const loading = requestModel.getInfo.useLoading();

  return (
    <div className={center.center}>
      <div className={styleButton.button} onClick={() => requestModel.getInfo('react')}>Npm React</div>
      <br />
      <div className={styleButton.button} onClick={() => requestModel.getInfo('vue')}>Npm Vue</div>
      <br />
      <div className={styleButton.button} onClick={() => requestModel.reset()}>Reset</div>
      <br />
      <p style={{ color: 'green', fontWeight: 'bold' }}>{loading ? 'Loading...' : ''}&nbsp;</p>
      <p>{data.id}</p>
      <p>{data.homepage}</p>
    </div>
  );
};

export default Logic;
