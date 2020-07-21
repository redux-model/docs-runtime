import React, { FC } from 'react';
import styleCenter from '../../styles/center.scss';
import styleButton from '../../styles/button.scss';
import { normalAction } from '../../models/NormalAction';

const Logic: FC = () => {
  return (
    <div className={styleCenter.center}>
      <div className={styleButton.button} onClick={() => normalAction.increase(1)}>step = 1</div>
      <br />
      <div className={styleButton.button} onClick={() => normalAction.increase(5)}>step = 5</div>
      <br />
      <div className={styleButton.button} onClick={() => normalAction.reset()}>Reset</div>
      <br />
      <p>{normalAction.useData((data) => data.counter)}</p>
    </div>
  );
};

export default Logic;
