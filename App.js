import React, { useState } from 'react';
import Game from './src/components/Game';
import Menu from './src/components/Menu';

const App = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showGame, setShowGame] = useState(false);
  handleShowGame = () => {
    console.log('aqui')
    setShowGame(true);
    setShowMenu(false);
  }

  if(showMenu)
    return <Menu handleShowGame={handleShowGame} />

  if (!showMenu && showGame)
    return (
      <>
        <Game />
      </>
    );
};

export default App;