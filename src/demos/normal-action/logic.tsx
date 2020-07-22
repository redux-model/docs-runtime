import React, { FC } from 'react';
import styleCenter from '../../styles/center.scss';
import styleButton from '../../styles/button.scss';
import { normalModel } from '../../models/NormalModel';

const Logic: FC = () => {
  return (
    <div className={styleCenter.center}>
      <div className={styleButton.button} onClick={() => normalModel.increase(1)}>step = 1</div>
      <br />
      <div className={styleButton.button} onClick={() => normalModel.increase(5)}>step = 5</div>
      <br />
      <div className={styleButton.button} onClick={() => normalModel.reset()}>Reset</div>
      <br />
      <p>{normalModel.useData((data) => data.counter)}</p>
    </div>
  );
};

export default Logic;
