import classNames from 'classnames';
import React, { useState } from 'react';

import { SHOW_ANSWER_DELAY } from '../../constants/constants';
import { buttonState } from '../../types/types';
import style from './QuizButton.module.css';

export interface QuizButtonProps {
  /** Content to display inside the button */
  children: React.ReactNode;
  /** Whether or not the answer is correct */
  correct: boolean;
  /** Whether or not the button is disabled */
  disabled: boolean;
  /** Callback when the button is clicked */
  onClick: () => void;
}

function QuizButton({
  children, correct, disabled, onClick,
}: QuizButtonProps) {
  const [currentButton, setCurrentButton] = useState<buttonState>('inactive');

  function showAnswer() {
    if (correct) {
      setCurrentButton('correct');
      return;
    }

    setCurrentButton('wrong');
  }

  function handleButtonClick() {
    onClick();
    setCurrentButton('waiting');
    setTimeout(() => {
      showAnswer();
    }, SHOW_ANSWER_DELAY);
  }

  return (
    <button
      className={classNames(style.answerButton, {
        [style.correct]: currentButton === 'correct',
        [style.wrong]: currentButton === 'wrong',
        [style.wait]: currentButton === 'waiting',
      })}
      onClick={() => handleButtonClick()}
      type="button"
      disabled={disabled}
    >
      <div className={style.imageHolder}>
        <svg
          width=""
          height=""
          viewBox="0 0 320 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // eslint-disable-next-line max-len
            d="M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z"
            fill="#FFFFFF"
            stroke="#D0D0D8"
          />
        </svg>
      </div>
      <div className={style.answer}>{children}</div>
    </button>
  );
}

export default QuizButton;
