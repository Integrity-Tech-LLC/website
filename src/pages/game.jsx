import React, { useEffect, useState } from "react";
import styles from "@/styles/Pages/Game.module.css";
import review from "public/review.jpeg";
import Image from "next/image";

export default function Game() {
  const [classSwitchSeq1, setClassSwitchSeq1] = useState(styles.logoSeq1);
  const [classSwitchSeq2, setClassSwitchSeq2] = useState(styles.logoSeq2);
  const [classSwitchSeq3first, setClassSwitchSeq3first] = useState(styles.logoSeq3first);
  const [classSwitchSeq3second, setClassSwitchSeq3second] = useState(styles.logoSeq3second);
  const [classSwitchSeq3third, setClassSwitchSeq3third] = useState(styles.logoSeq3third);
  const [classSwitchSeq3forth, setClassSwitchSeq3forth] = useState(styles.logoSeq3forth);
  const [classSwitchSeq3fifth, setClassSwitchSeq3fifth] = useState(styles.logoSeq3fifth);
  const [classSwitchSeq4, setClassSwitchSeq4] = useState(styles.logoSeq4);
  const [classSwitchSeq5, setClassSwitchSeq5] = useState(styles.logoSeq5);
  const [classSwitchSeq6, setClassSwitchSeq6] = useState(styles.logoSeq6);
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
if(start) {
  setTimeout(() => {
    if(timer) {
      setTimer(timer => timer - 1)
    }
  }, 1000);
  if(!timer) {
    setStart(false)
      setTimer(30)
      if(score > highScore) {
      localStorage.setItem("highScore", score)
      }
      setScore(0)
  }
}
}, [start, timer])

useEffect(() => {
  setClassSwitchSeq3first(styles.logoSeq3first);
  setClassSwitchSeq3second(styles.logoSeq3second);
  setClassSwitchSeq3third(styles.logoSeq3third);
  setClassSwitchSeq3forth(styles.logoSeq3forth);
  setClassSwitchSeq3fifth(styles.logoSeq3fifth);
  setClassSwitchSeq4(styles.logoSeq4);
  setClickCount(0);
  let seqTime = Number((Math.floor(Math.random() * 3) + 2) * 1000)
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
      }, Number(seqTime));
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
    setClassSwitchSeq1(styles.logoSeq1)
    setClassSwitchSeq2(styles.logoSeq2)
    setClassSwitchSeq5(styles.logoSeq5)
    setClassSwitchSeq6(styles.logoSeq6)
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
          <Image
        style={{left: xAxis, top: yAxis}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq1}
        onClick={() => {
          setClassSwitchSeq1(styles.whenclicked)
          clickFunc()
        }}
      />
      ) :sequence === 2 ? (
      <Image
        style={{left: xAxisSeq2}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq2}
        onClick={() => {
          setClassSwitchSeq2(styles.whenclicked)
          clickFunc()
        }}
        />
      ) :sequence === 3 ? (
        <>
      <Image
        style={{left: '30%'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq3first}
        onClick={() => {
          setClassSwitchSeq3first(styles.whenclicked)
          clickFunc()
        }}
        />
          <Image
        style={{left: '30%'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq3second}
        onClick={() => {
          setClassSwitchSeq3second(styles.whenclicked)
          clickFunc()
        }}
        />
          <Image
        style={{left: '30%'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq3third}
        onClick={() => {
          setClassSwitchSeq3third(styles.whenclicked)
          clickFunc()
        }}
        />
          <Image
        style={{left: '30%'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq3forth}
        onClick={() => {
          setClassSwitchSeq3forth(styles.whenclicked)
          clickFunc()
        }}
        />
          <Image
        style={{left: '30%'}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq3fifth}
        onClick={() => {
          setClassSwitchSeq3fifth(styles.whenclicked)
          clickFunc()
        }}
        />
        </>
      ) :sequence === 4 ? (
        <>
        <h1 style={{textAlign: 'center'}}>Quick! Keep Tapping!</h1>
    <Image
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={600}
        height={400}
        priority
        className={classSwitchSeq4}
        onClick={() => {
          console.log(clickCount)
          setClickCount(clickCount => clickCount + 1)
          if(clickCount === 10) {
            setClassSwitchSeq4(styles.whenclicked)
            setClickCount(0)
          clickFunc()
          }
          
        }}
        />
        </>
      ) :sequence === 5 ? (
        <Image
        style={{left: xAxisSeq5}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq5}
        onClick={() => {
          setClassSwitchSeq5(styles.whenclicked)
          clickFunc()
        }}
        />
      ) : (
      <Image
        style={{bottom: yAxisSeq6}}
        src="/base_icon_transparent_background.png"
        alt="company logo"
        width={90}
        height={60}
        priority
        className={classSwitchSeq6}
        onClick={() => {
          setClassSwitchSeq6(styles.whenclicked)
          clickFunc()
        }}
        />
      )
       ) : (
         <button
            className={styles.startBtn}
            name="startGame"
            onClick={() => setStart(true)}>
            <span>Start</span>
          </button>
       )}
    
    </>
  );
}
