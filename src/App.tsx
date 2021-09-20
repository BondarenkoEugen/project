import React, { useState } from 'react';

import GameScreen from './components/GameScreen/GameScreen';
import StartMenu from './components/StartMenu/StartMenu';
import EndMenu from './components/EndMenu/EndMenu';
import { stage } from './types/types';

export function App() {
  const [currentStage, setCurrentStage] = useState<stage>('start');
  const [cardIndex, setCardIndex] = useState<number>(0);

  return (
    <main>
      {currentStage === 'start' && (
        <StartMenu onClick={() => setCurrentStage('game')} />
      )}

      {currentStage === 'end' && (
        <EndMenu
          cardIndex={cardIndex}
          onClick={() => {
            setCardIndex(0);
            setCurrentStage('game');
          }}
        />
      )}

      {currentStage === 'game' && (
        <GameScreen
          cardIndex={cardIndex}
          onCardIndexChange={setCardIndex}
          onEnd={() => {
            setCurrentStage('end');
          }}
        />
      )}
    </main>
  );
}
