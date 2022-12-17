import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import {
  useParams
} from "react-router-dom";

import characters from '../constants/characters';

const enemy = {
  hp: 20,
  str: 7,
  def: 7
}

function App() {
  const { id } = useParams();
  let navigate = useNavigate();
  const player = characters[id];

  const [enemyHP, setEnemyHP] = useState(enemy.hp);
  const [playerHP, setPlayerHP] = useState(player.hp);
  const [enemyPer, setEnemyPer] = useState(100);
  const [playerPer, setPlayerPer] = useState(100);
  const [round, setRound] = useState(0);
  const [battleInfo, setBattleInfo] = useState("Please choose a move.");
  const [win, setWin] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function playerAttack(move) {
    let dice = getRandomInt(0, 20);
    let str = player.str;
    if (move == "grab") {
      dice += getRandomInt(1, 6);
      str -= getRandomInt(1, 3);
    } else {
      dice -= getRandomInt(1, 6);
      str += getRandomInt(1, 3);
    }
    if (dice > enemy.def) {
      //hit
      let newEnemyHP = enemyHP - str;
      if (enemyHP <= 0) {
        //game over
        setBattleInfo("Game Over!");
        setEnemyPer(0);
        setRound(3);
        setWin(true);
        return;
      } else {
        setEnemyHP(newEnemyHP);
        setEnemyPer(newEnemyHP / enemy.hp * 100);
      }
      setBattleInfo("You hit for " + str);
    } else {
      //miss
      setBattleInfo("You missed!");
    }
    cont();
  }

  function cont() {
    if (round >= 2) {
      setRound(0);
    } else {
      setRound(round + 1);
    }

    switch (round) {
      case 1:
        enemyAttack();
        break;
      case 2:
        setBattleInfo("Please choose a move.");
        break;
    }
  }

  function enemyAttack() {
    let dice = getRandomInt(0, 20);
    if (dice > player.def) {
      //hit
      let newPlayerHP = playerHP - enemy.str;
      if (newPlayerHP <= 0) {
        //game over
        setBattleInfo("Game Over!");
        setPlayerPer(0);
        setRound(3);
        setWin(false);
        return;
      } else {
        setPlayerHP(newPlayerHP);
        setPlayerPer(newPlayerHP / player.hp * 100);
      }
      setBattleInfo("Soheil hits for " + enemy.str);
    } else {
      //miss
      setBattleInfo("Soheil missed!");
    }
  }

  return (
    <div>
      <h1>Judo!</h1>
      <Row className="battlers">
        <Col>
          <img src={require('../img/soheil.png')} />
          <h5>Soheil</h5>
          <div className="hp" style={{ width: enemyPer + '%' }}>
          </div>

        </Col>
        <Col>
          <img src={require('../img/' + characters[id].img)} />
          <h5>{characters[id].charName}</h5>
          <div className="hp" style={{ width: playerPer + '%' }}>
          </div>
        </Col>
      </Row>
      {
        round == 3 ?
        <div class="gameOver">
        <h3>Game Over!</h3>
        {
          win ? 
          <p>You won! You don't need judo lessons.</p> :
          <>
          <p>You lost!</p>
          <p>By using this simulator you are contractually obligated to sign up for classes.</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input type="button" value="Go Home" onClick={() => navigate('/')} />
          <input type="button" value="Play Again" onClick={() => window.location.reload(false)} />
          </div>
          </>
        }
        </div>
        :
      <Row className="battlePanel">
        <Col>
          <p>{battleInfo}</p>
        </Col>
        <Col>
          {
            round == 0 ?
              <>
                <input type="button" value="Grab" onClick={() => playerAttack("grab")} />
                <input type="button" value="Throw" onClick={() => playerAttack("throw")} />
              </> : 
                <input type="button" value="Continue" onClick={() => cont()} />
          }
        </Col>
      </Row>
      }
    </div>
  );
}

export default App;
