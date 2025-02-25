import React from 'react';
import BookIndexContainer from './books/book_index_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
   }
  render () {
    return (
      <div>
          <Switch>
           <ProtectedRoute exact path="/books" component={BookIndexContainer} />
           </Switch>
      </div>
    );
  }
}

export default HomePage;
