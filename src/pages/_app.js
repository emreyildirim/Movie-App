import { Provider } from 'mobx-react';
import store from '../store/store';
import '../styles/style.scss';

export default function MovieApp({ Component, pageProps }) {
    return (
        <Provider store={store}>

            <Component {...pageProps} />
            
        </Provider>
    );
}
