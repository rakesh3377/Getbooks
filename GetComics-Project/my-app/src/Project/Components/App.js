import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './navigator'


export default function App() {

    return (
        <Provider store={store}>

            <div>
                <ToastContainer></ToastContainer>
                <Main />
            </div>
        </Provider>
    )
};

