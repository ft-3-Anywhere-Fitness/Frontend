import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (window.localStorate.getItem('token')) {
                    console.log('access granted');
                    return <Component />;
                }
                else
                {
                    console.log('access denied');
                    return <Redirect to ='/' />;
                }
            }}
        />
    );
}

export default PrivateRoute;
