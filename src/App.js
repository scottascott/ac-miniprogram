import {Switch,Route} from 'react-router-dom'
import {lazy,Suspense} from 'react'

// import Home from './pages/Home';
// import Activities from './pages/Activities';
// import SecondHand from './pages/SecondHand';
// import Notifications from './pages/Notifications';
import News from './components/News';
import Loading from './pages/Loading';

import './App.less';

const Home = lazy(()=>import('./pages/Home'))
const Activities = lazy(()=>import('./pages/Activities'))
const SecondHand = lazy(()=>import('./pages/SecondHand'))

function App() {
  return (
    <div className="App">
      <Switch>
        <Suspense fallback={<Loading/>}>
          <Route path='/home' component={Home}/>
          <Route path='/activities' component={Activities}/>
          <Route path='/secondhand' component={SecondHand}/>
          <Route path='/News' component={News}/>
          {/* <Redirect to='/home'/> */}
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
