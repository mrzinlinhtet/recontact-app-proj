import { Navigate } from 'react-router-dom'
import Cookie from 'js-cookie'

const RouteGuard = ({children}) => {
    const token = Cookie.get('token')
    if(token){
        return children
    } else return <Navigate to="/login" />
}

export default RouteGuard
