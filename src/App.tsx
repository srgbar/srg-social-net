import React from "react";
import "./App.css";
import {HashRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedAppTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {Footer} from "./Footer/Footer";

export type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializedAppTC: () => void
}
export type AppPropsType = MapStatePropsType & MapDispatchPropsType


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const Music = React.lazy(() => import("./components/Music/Music"));


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializedAppTC();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           component={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           component={withSuspense(ProfileContainer)}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           component={withSuspense(LoginPage)}/>
                    <Route path="/music"
                           component={withSuspense(Music)}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedAppTC}))(App);

const SamuraiJSApp = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;