import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'


import {Layout} from "./Components/Layout/Layout";
import {PageNoFound} from "./Components/PageNoFound";
import HomePage from "./Components/Homepage";
import Registry from "./Components/Auth/Registry";
import Login from "./Components/Auth/Login";
import Company from "./Components/Company/Company";
import {useEffect} from "react";
import AuthServices from "./Components/API/authServices";
import {setAuth, setUser} from "./redux/action";

function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const t = async () =>{
            // This condition blocks the double call. The double call is due to the nature
            // of the development mode in React. A double call must be prevented because
            // of the asyn, the user authentication logic is violated by refresh token

            if (!sessionStorage.getItem('fs')){
                sessionStorage.setItem( 'fs', "true" )
                try {
                    const response = await AuthServices.checkAuth();
                    dispatch(setAuth(true));
                    console.log('In APP:= id, email=>', response.data.id, response.data.email)
                    dispatch(setUser(
                        {
                            id : response.data.id,
                            email : response.data.email,
                        })
                    )
                    localStorage.setItem( 'token', response.data.access_token )
                    sessionStorage.removeItem('fs')
                } catch (e) {
                    alert('Global error with the database')
                    console.log(e)
                }
            }
        }
        t();
    },[])
  return (
      <>
        {/* <Ingredients /> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index                        element={<HomePage />} />
            <Route path='login'                 element={<Login />} />
            <Route path='registry'              element={<Registry />} />

            <Route path='company'   element={<Company />} />
            <Route path='add-users'     element={<Equipment />} />

            {/*<Route path='recipe/list'           element={<RecipeList/>} />*/}
            {/*<Route path='recipe/:id'            element={<RecipeEdit/>} />*/}
            {/*<Route path='recipe/create'         element={<Recipe/>} />*/}
            {/*<Route path='recipe/detail/:id'     element={<RecipeDetailView/>} />*/}

            {/*<Route path='task/create'           element={<CreateTask/>} />*/}
            {/*<Route path='task/list'             element={<TaskList/>} />*/}
            {/*<Route path='task/:id'              element={<CreateTask/>} />*/}

            {/*<Route path='warehouse/purchase'    element={<Document docType={'purchase'}/>} />*/}
            {/*<Route path='warehouse/span'        element={<Document docType={'span'}/>} />*/}
            {/*<Route path='warehouse/'            element={<DocumentList />} />*/}
            {/*<Route path='warehouse/:id'         element={<Document />} />*/}
            {/*<Route path='warehouse/stock'       element={<StockBalance />} />*/}

            <Route path='*'                     element={<PageNoFound />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;
