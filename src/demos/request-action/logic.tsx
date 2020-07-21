import React, { FC } from 'react';
import center from '../../styles/center.scss';
import styleButton from '../../styles/button.scss';
import { requestAction } from '../../models/RequestAction';

const Logic: FC = () => {
  const data = requestAction.useData();
  const loading = requestAction.getInfo.useLoading();

  return (
    <div className={center.center}>
      <div className={styleButton.button} onClick={() => requestAction.getInfo('react')}>Npm React</div>
      <br />
      <div className={styleButton.button} onClick={() => requestAction.getInfo('vue')}>Npm Vue</div>
      <br />
      <div className={styleButton.button} onClick={() => requestAction.reset()}>Reset</div>
      <br />
      <p style={{ color: 'green', fontWeight: 'bold' }}>{loading ? 'Loading...' : ''}&nbsp;</p>
      <p>{data.id}</p>
      <p>{data.homepage}</p>
    </div>
  );
};

export default Logic;
