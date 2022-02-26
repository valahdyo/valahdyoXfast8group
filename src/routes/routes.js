import { Route, Switch } from "react-router-dom"
import Home from "../pages/home"

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route
        path="*"
        component={() => {
          return (
            <h1 className="display-4 font-weight-bold text-center mt-5">
              404 Not Found
            </h1>
          )
        }}
      />
    </Switch>
  )
}

export default Routes
