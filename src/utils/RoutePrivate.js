import React from 'react'
import { Redirect, Route }  from "react-router-dom"

const PrivateRoute = ({children, ...propierties}) => {
  const [user, setUser] = useState(null)

    if (user) {
        return <Route {...propierties}>{children}</Route>
    } else {
        return <Redirect to="/login" />
    }
}

export default PrivateRoute
