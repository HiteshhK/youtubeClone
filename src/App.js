import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Head/>
    <RouterProvider router={appRouter}/>
      {
        /**
         * Head
         * Body
         *  Sidebar
         *    MenuItem
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *    
         */
      }
    </div>
    </Provider>
  );
}

export default App;
