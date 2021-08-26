import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import Posts from "./components/Posts";
import Post from "./components/Post";
import User from "./components/User";
import "./app.scss";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <main className='page-main'>
                    <Switch>
                        <Route exact path='/' component={Posts}/>
                        <Route exact path='/posts/:id/' component={Post}/>
                        <Route exact path='/users/:id/' component={User}/>
                        <Redirect to='/'/>
                    </Switch>
                </main>
            </Router>
        </>
    );
}

export default App;