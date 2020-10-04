import React from 'react';
import './App.css';
import Payment from "./payment";
import { Machine } from 'xstate';
const stateMachine = Machine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        SUBMIT: 'loading',
      }
    },
    loading: {
      on: {
        PAYMENT_RECEIVED: 'success',
        PAYMENT_FAILED: 'error',
      }
    },
    error: {
      on: {
        SUBMIT: 'loading',
      }
    },
    success: {
      type: 'final',
    }
  }
});

const App = () => {
  return (
    <div>
      <Payment />
    </div>
  )
}

export default App;
