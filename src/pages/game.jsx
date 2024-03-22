import React, { useEffect, useState } from "react";
import styles from "@/styles/Pages/Game.module.css";
import review from "public/review.jpeg";
import Image from "next/image";
import { GiSpikyExplosion } from "react-icons/gi";

export default function Game() {
  const [classSwitchSeq1, setClassSwitchSeq1] = useState(false);
  const [classSwitchSeq2, setClassSwitchSeq2] = useState(false);
  const [classSwitchSeq3first, setClassSwitchSeq3first] = useState(false);
  const [classSwitchSeq3second, setClassSwitchSeq3second] = useState(false);
  const [classSwitchSeq3third, setClassSwitchSeq3third] = useState(false);
  const [classSwitchSeq3forth, setClassSwitchSeq3forth] = useState(false);
  const [classSwitchSeq3fifth, setClassSwitchSeq3fifth] = useState(false);
  const [classSwitchSeq4, setClassSwitchSeq4] = useState(false);
  const [classSwitchSeq5, setClassSwitchSeq5] = useState(false);
  const [classSwitchSeq6, setClassSwitchSeq6] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [xAxis, setXAxis] = useState(0);
  const [xAxisSeq2, setXAxisSeq2] = useState(0);
  const [xAxisSeq5, setXAxisSeq5] = useState(0);
  const [yAxisSeq6, setYAxisSeq6] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [clicked, setClicked] = useState(true);
  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState(1);
  const [start, setStart] = useState(false)
  const [timer, setTimer] = useState(30);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

useEffect(() => {
  if(!start) {
const scoreRecords = localStorage.getItem("highScore")
setHighScore(scoreRecords)
  }
}, [start])

useEffect(() => {
  if(gameOver) {
    setTimeout(() => {
      setGameOver(false)
      if(score > highScore) {
      localStorage.setItem("highScore", score)
      }
    }, 4000);
  }
}, [gameOver])



useEffect(() => {
if(start) {
  setTimeout(() => {
    if(timer) {
      setTimer(timer => timer - 1)
    }
  }, 1000);
  if(!timer) {
    setStart(false)
      setTimer(30)
      setGameOver(true)
  }
}
}, [start, timer])

useEffect(() => {
  setClassSwitchSeq2(false)
  setClassSwitchSeq3first(false);
  setClassSwitchSeq3second(false);
  setClassSwitchSeq3third(false);
  setClassSwitchSeq3forth(false);
  setClassSwitchSeq3fifth(false);
  setClassSwitchSeq4(false);
  setClassSwitchSeq5(false)
  setClassSwitchSeq6(false)
  setClickCount(0);
   setTimeout(() => {
      let newSeq = Number(Math.ceil((Math.random()) * 6))
      if(newSeq === sequence) {
        if(newSeq === 6) {
        newSeq -= 1
        } else {
        newSeq += 1
        }
      }
      setSequence(newSeq)
      }, 2000);
}, [sequence])

  useEffect(() => {
    if (Number(sequence) === 2) {
      setTimeout(() => {
      const x = Math.floor(Math.random() * 6)
      const percent = x + '0%'
      setXAxisSeq2(percent)
      }, 2000);
    }
  }, [xAxisSeq2, clicked, sequence]);

    useEffect(() => {
    if (Number(sequence) === 5) {
      setTimeout(() => {
      const x = Math.floor(Math.random() * 6)
      const percent = x + '0%'
      setXAxisSeq5(percent)
      }, 1000);
    }
  }, [xAxisSeq5, clicked, sequence]);

     useEffect(() => {
    if (Number(sequence) === 6) {
      setTimeout(() => {
      const y = (Math.floor(Math.random() * 6)) + 2
      const percent = y + '0%'
      setYAxisSeq6(percent)
      }, 1000);
    }
  }, [xAxisSeq5, clicked, sequence]);

useEffect(() => {
  setTimeout(() => {
const dimensions = getWindowDimensions();
  let x = Math.floor(Math.random() * dimensions.width)
  let y = Math.floor(Math.random() * dimensions.height)
  if(y < 150) {
   y += 150
  }
  if(y > (dimensions.height - 100)) {
    y -= 100
  }

  if(x < 100) {
   x += 100
  }
  if(x > (dimensions.width - 100)) {
    x -= 100
  }
  setXAxis(x)
  setYAxis(y)
    setClassSwitchSeq1(false)
  }, 100);
}, [clicked])

const clickFunc = () => {
  setClicked(clicked => !clicked)
  if(sequence === 4) {
    setScore(score => Number(score) + 10)
  } else {
  setScore(score => Number(score) + 1)
  }
}

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${review.src})`,
          width: "100%",
          backgroundSize: "100% 250px",
          backgroundRepeat: "no-repeat",
          marginTop: 50,
        }}>
        <div className={styles.banner}>
          <h2 className={styles.bannerHeader}>Logo Attack! Time: {timer}</h2>
          <p className={styles.score}>Score: {score}</p>
          <p className={styles.score}> High Score: {highScore || 0}</p>
        </div>
      </div>
      {start ? (
      sequence === 1 ? (
        <div 
        className={styles.logoSeq1}
        style={{left: xAxis, top: yAxis}}
         onClick={() => {
          setClassSwitchSeq1(true)
          clickFunc()
        }}>
          {classSwitchSeq1 ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
        <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
         
      </div>
      ) :sequence === 2 ? (
        <div className={styles.logoSeq2}
        onClick={() => {
          setClassSwitchSeq2(true)
          clickFunc()
        }}
        style={{left: xAxisSeq2, padding: 0, margin: 0}}>
           {classSwitchSeq2 ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
      <Image
        style={{textAlign: 'center'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
      
      ) :sequence === 3 ? (
        <>
        <div className={styles.logoSeq3first}
        onClick={() => {
          setClassSwitchSeq3first(true)
          clickFunc()
        }}
        style={{left: '30%'}}>
           {classSwitchSeq3first ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
      <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
        <div 
        className={styles.logoSeq3second}
        onClick={() => {
          setClassSwitchSeq3second(true)
          clickFunc()
        }}
        style={{left: '30%'}}>
           {classSwitchSeq3second ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
        <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
        <div 
        className={styles.logoSeq3third}
        onClick={() => {
          setClassSwitchSeq3third(true)
          clickFunc()
        }}
        style={{left: '30%'}}>
           {classSwitchSeq3third ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
        <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
        <div 
        className={styles.logoSeq3forth}
        onClick={() => {
          setClassSwitchSeq3forth(true)
          clickFunc()
        }}
        style={{left: '30%'}}>
           {classSwitchSeq3forth ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
          <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
        <div 
        className={styles.logoSeq3fifth}
        onClick={() => {
          setClassSwitchSeq3fifth(true)
          clickFunc()
        }}
        style={{left: '30%'}}>
           {classSwitchSeq3fifth ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
        <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
        </>
      ) :sequence === 4 ? (
        <>
        <h1 style={{textAlign: 'center'}}>Quick! Keep Tapping! {clickCount}</h1>
        <span   
        style={{textAlign: 'center'}}
        className={styles.logoSeq4}
        onClick={() => {
          setClickCount(clickCount => clickCount + 1)
          if(clickCount === 10) {
            setClassSwitchSeq4(true)
            setClickCount(0)
          clickFunc()
          setTimeout(() => {
      let newSeq = Number(Math.ceil((Math.random()) * 6))
      if(newSeq === sequence) {
        if(newSeq === 6) {
        newSeq -= 1
        } else {
        newSeq += 1
        }
      }
      setSequence(newSeq)
          }, 100);
          }
        }}>
           {classSwitchSeq4 ? (
          <GiSpikyExplosion size={600} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
    <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={300}
        height={200}
        priority
        />
          )}
        </span>
        </>
      ) :sequence === 5 ? (
        <div  
        className={styles.logoSeq5}
        onClick={() => {
          setClassSwitchSeq5(true)
          clickFunc()
        }}
        style={{left: xAxisSeq5}}>
        {classSwitchSeq5 ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
        <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
      ) : (
        <div 
        className={styles.logoSeq6}
        onClick={() => {
          setClassSwitchSeq6(true)
          clickFunc()
        }}
        style={{bottom: yAxisSeq6}}>
           {classSwitchSeq6 ? (
          <GiSpikyExplosion size={90} style={{fill: 'red'}} className={styles.quickDisappear} />
          ) : (
      <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        />
          )}
        </div>
      )
       ) : (
        gameOver ? (
          <>
          <div className={styles.gameOver}>
            <h1>Game Over</h1>
          </div>
          <div className={styles.gameOver}>
            <p>Score: {score}</p>
          </div>
          {score > highScore && (
          <div style={{color: '#06038d', fontWeight: 700}} className={styles.gameOver}>
            <p>new high score!</p>
          </div>
          )}
          </>
        ) : (
        <button
            className={styles.startBtn}
            name="startGame"
            onClick={() => {
            setScore(0);
            setStart(true);
            }}>
            <span>Start</span>
          </button>
        )
      
       )}
    
    </>
  );
}
