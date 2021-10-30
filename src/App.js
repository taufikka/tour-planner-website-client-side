import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import BookDetails from './Pages/Home/BookDetails/BookDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import MyOrder from './Pages/Home/MyOrder/MyOrder';
import ManageAllOrders from './Pages/Home/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/Home/AddNewService/AddNewService';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute exact path='/service/:id'>
              <BookDetails></BookDetails>
            </PrivateRoute>

            <PrivateRoute exact path='/order'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path='/allOrders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute exact path='/addService'>
              <AddNewService></AddNewService>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
