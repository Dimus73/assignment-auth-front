import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./Components/Layout/Layout";
import {PageNoFound} from "./Components/PageNoFound";
import HomePage from "./Components/Homepage";
import Registry from "./Components/Auth/Registry";
import Login from "./Components/Auth/Login";
import Company from "./Components/Company/Company";

function App() {
  return (
      <>
        {/* <Ingredients /> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index                        element={<HomePage />} />
            <Route path='login'                 element={<Login />} />
            <Route path='registry'              element={<Registry />} />

            <Route path='company'   element={<Company />} />
            {/*<Route path='catalog/equipment'     element={<Equipment />} />*/}

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
