import './App.css'
import Header from './components/Header';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { Test, dataFetcher } from './pages/Test';
// import { BrowserRouter as Route, Link, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider} from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider, Box } from '@mui/material';
import { RegisterPage } from './pages/RegisterPage';
import ReadMore from './pages/ReadMore';
import { Device } from './pages/device/Device';
import DeviceDetail from './pages/device/DeviceDetail';
import { NewDevice } from './pages/device/NewDevice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#131414',
      text: '#f5f5f5'
    },
    secondary: {
      main: '#f8ab52',
      text: '#333333'
    },
    error: {
      main: '#b50a0a',
      text: ' #f5f5f5'
    },
    warning: {
      main: '#f87500',
      text: '#f5f5f5'
    },
    transparent: {
      main: 'rgba(19, 20, 20, 0.9)'
    }
  }
});

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/test' loader={dataFetcher} element={<Test />}/>
        <Route path='/readmore' element={<ReadMore />}/>
  
        <Route path='/devices' element={<Device />} />
        <Route path='/devices/:id' element={<DeviceDetail />} />
        <Route path='/devices/new' element={<NewDevice />} />
      </Route>
    )
  );
  

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <RouterProvider router={router} />

      </div>
    </ThemeProvider>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '6vh' }}>
        <Outlet />
      </div>
    </>
  )
}


export default App
