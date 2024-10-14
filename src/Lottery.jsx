import React, { useState } from "react";
import TicketsGroup from "./TicketsGroup";


const Lottery = (Message) => {
    const [noofTickets,setnoofTickets]=useState('');
    const [winningSum,setWinningSum]=useState('');
    const [isWinning,setIsWinning]=useState(false);
  const restartGame=()=>{
    setnoofTickets('');
    setWinningSum('');
    setIsWinning(false);
  };

  const handleIsWinning=()=>{
    setIsWinning(true);
  }

    const handleNoofTickets=(event)=>{
        setnoofTickets(event.target.value);
        // console.log(noofTickets)
    }
    const handlewinningSum=(event)=>{
        setWinningSum(event.target.value);
        // console.log(winningSum)
    }
  return (
    <div>
      
      <h1 className="my-4">Welcome to Gargi's lottery game</h1>
      <div className="form-floating mb-3">
        <input onChange={handleNoofTickets}
          value={noofTickets}
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="Enter no of tickets"
        />
        <label htmlFor="floatingInput">Enter no of tickets</label>
      </div>
      <div className="form-floating">
        <input onChange={handlewinningSum}
        value={winningSum}
          type="number"
          className="form-control"
          id="floatingPassword"
          placeholder="Enter winning sum"
        />
        <label htmlFor="floatingPassword">Enter winning sum</label>
      </div>
      <TicketsGroup noofTickets={noofTickets} winningSum={winningSum} rg={restartGame} hiw={handleIsWinning} />
      <p className='text-danger fw-bold display-5'>
        {isWinning &&'Congratulations !!! You have won'}
        </p>
      
    </div>
  );
};

export default Lottery;
