import React from 'react';
import classNames from 'classnames';

import style from './ProgressTab.module.css';

export interface ProgressTabProps {
  /** Content to display inside the button */
  children: React.ReactNode;
  /** Whether or not the tab is active */
  active: boolean;
}

function ProgressTab({ children, active }: ProgressTabProps) {
  return (
    <div className={classNames(style.container, { [style.active]: active })}>
      <div className={style.imageHolder}>
        <svg
          width=""
          height=""
          viewBox="0 0 240 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // eslint-disable-next-line max-len
            d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z"
            fill="#FFFFFF"
            stroke="#D0D0D8"
          />
        </svg>
      </div>
      <div className={style.textBlock}>{children}</div>
    </div>
  );
}

export default ProgressTab;
