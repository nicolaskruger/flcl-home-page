import { FC } from "react";
import { BrowserRouter, RouteProps, Switch } from "react-router-dom";
import { FRONTEND_ROUTES } from "../../constants";
import { HomeScreen } from "../../ui";
import { PublicRoute } from "../custom/public/public.route";


const { HOME
} = FRONTEND_ROUTES;

type RouteBuild = {
    path: string,
    exact: boolean,
    component: FC,
    CustomRoute: FC<RouteProps>
}


const RouterBuilder: FC = ({ children }) => {
    const builder: RouteBuild[] = [
        {
            CustomRoute: PublicRoute,
            component: HomeScreen,
            exact: false,
            path: HOME
        }
    ]
    return (
        <BrowserRouter>
            <Switch>
                {
                    builder.map(({ component, exact, path, CustomRoute }, index) => (
                        <CustomRoute key={index} component={component} exact={exact} path={path} />
                    )
                    )
                }
            </Switch>
            {children}
        </BrowserRouter>
    )
}

export { RouterBuilder }