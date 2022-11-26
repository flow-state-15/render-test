import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { thunkRestoreUser } from './store/session';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(thunkRestoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <h1>Hello from App</h1>
      {isLoaded && (
        <>
          <Navigation isLoaded={isLoaded} />
          <Switch>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
