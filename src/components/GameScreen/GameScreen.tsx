import React, { useState } from 'react';

import { NEXT_STEP_DELAY } from '../../constants/constants';
import gameConfig from '../../gameConfig.json';
import Progress from '../Progress/Progress';
import QuizButton from '../QuizButton/QuizButton';
import style from './GameScreen.module.css';

export interface GameScreenProps {
  /** Index of current card */
  cardIndex: number;
  /** Callback when index is changed */ /* eslint-disable no-unused-vars */
  onCardIndexChange: (index: number) => void;
  /** Callback game is over */
  onEnd: () => void;
}

function GameScreen({ cardIndex, onCardIndexChange, onEnd }: GameScreenProps) {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);

  function nextLevel() {
    if (cardIndex > 10) {
      onEnd();
      return;
    }

    onCardIndexChange(cardIndex + 1);
  }

  function nextStep(answer: boolean) {
    setButtonsDisabled(false);
    if (answer) {
      nextLevel();
      return;
    }

    onEnd();
  }

  function handleButtonClick(answer: boolean) {
    setButtonsDisabled(true);
    setTimeout(() => {
      nextStep(answer);
    }, NEXT_STEP_DELAY);
  }

  return (
    <div className={style.container}>
      <div className={style.questionBlock}>
        <p className={style.questionText}>
          {gameConfig.cards[cardIndex].question}
        </p>
        <div className={style.answersBlock}>
          {gameConfig.cards[cardIndex].answers.map((answer) => (
            <div key={answer.text} className={style.buttonWrapper}>
              <QuizButton
                onClick={() => handleButtonClick(answer.correct)}
                correct={answer.correct}
                disabled={buttonsDisabled}
              >
                <span className={style.answerLetter}>{answer.letter}</span>
                <span className={style.answerText}>{answer.text}</span>
              </QuizButton>
            </div>
          ))}
        </div>
      </div>
      <Progress active={menuActive} cardIndex={cardIndex} />
      <button
        type="button"
        onClick={() => setMenuActive(!menuActive)}
        className={style.menuButton}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

export default GameScreen;
