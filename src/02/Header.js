import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.

class Header extends Component {//헤더영역에 들어가는 컴포넌트명
    render(){//가상의 돔으로 출력
        return(//구현할 ui내용
            <div>
                <header><h1>헤더입니다.</h1></header>
            </div>
        );
    }
}

export default Header;//Header 내보내기