import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/router";
 
const AppRouter: FunctionComponent = () => {
    return ( <Routes>
        {routes.map((r)=>(
                    <Route 
                        path={r.path} 
                        element={r.component} 
                        key={r.path}
                    />))}
    </Routes>);
}
 
export default AppRouter;