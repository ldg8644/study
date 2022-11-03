import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.
import Header from './Header';
import Map from './Map';
import Footer from './Footer';

class MapPage extends Component {
    render(){
        return(
            <div>
             <Header />
             <Map />
             <Footer />
            </div>
        );
    }
}

export default MapPage;