import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MainPage extends Component {
    render(){
        return(
            <div>
             <Header />
             <Main />
             <Footer />
            </div>
        );
    }
}

export default MainPage;