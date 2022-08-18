import './timer.sass';
import Break from './components/Break/Break'
import Session from './components/Session/Session'
import Controls from './components/Controls/Controls'
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { useStateValue } from './contexts/stateProvider';
import { useClockify } from './hooks/useClockify';
import {  auth, db,logout } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const navigate = useNavigate();
  const [{projectName, timerLabel}] = useStateValue();
  const clockifiedValue = useClockify();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
   
  }, [user, loading]);


  return (
    <>
    <div className="timer">
      <h2 className='timer__maintitle'>{projectName}</h2>
      <h3 id='timer-label' className='timer__label'>{timerLabel}</h3>
      <h1 id='time-left' className='timer__time'>{clockifiedValue}</h1>
      <Controls />
      <div className="timer__controllers">
        <Break />
        <Session />
      </div>
      <ThemeToggle />
      
    </div>
    <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
    </>
  );
}

export default Timer;
