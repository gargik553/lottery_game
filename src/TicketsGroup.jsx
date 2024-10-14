import React, { useState } from 'react'
import { getSum, getTickets } from './helper';
import Ticket from './Ticket';
import Lottery from './Lottery';

const TicketsGroup = ({noofTickets,winningSum,rg,hiw}) => {
    const [tickets,setTickets]=useState(getTickets(noofTickets));
    const handleNewTickets=()=>{
        if(noofTickets =="")
        {
            alert("enter values")
        }
        if(winningSum =="")
        {
            alert("enter values")
        }
        else{
        setTickets(getTickets(noofTickets));
        }
    };
    const isWinning = winningSum==getSum(tickets)
    if(winningSum==getSum(tickets))hiw();
   
  return (
    <div>
        <div className='text-center my-5 border border-primary'>
            <h5>Tickets</h5>
            {noofTickets && winningSum && tickets && tickets.map((ticket)=><Ticket tno={ticket} />)}
            

        </div>
        <div className='row my-4'>
        {!isWinning?<div className='col'><button className="btn btn-success" onClick={handleNewTickets}>New Tickets</button></div>:<div className='col'><button className="btn btn-success" onClick={handleNewTickets}disabled>New Tickets</button></div>}
        {!isWinning? <div className='col'><button className="btn btn-danger" disabled>Restart Game</button></div>:<div className='col'><button className="btn btn-danger" onClick={rg}>Restart Game</button></div>}
        </div>
        
    </div>
  )
}

export default TicketsGroup
