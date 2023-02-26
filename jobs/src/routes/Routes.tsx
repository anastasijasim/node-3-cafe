import {Route, Routes as RoutesWrapper} from "react-router-dom";
import { routes } from "./const";
// import{mainLayoutRoutes} from "./const";


const Routes = () => {
//   const {routes, Layout} = mainLayoutRoutes;

  return (
    <RoutesWrapper>
        {routes.map(({path, Component}) => (
            <Route 
                key={path}
                path={path}
                element={
                  <Component />} />
            ))}
    </RoutesWrapper>
  );
};

export default Routes