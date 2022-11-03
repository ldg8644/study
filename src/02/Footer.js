import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.

class Footer extends Component {//푸터영역에 들어가는 컴포넌트명
    render(){//가상의 돔으로 출력
        return(//구현할 ui내용
            <div>
                <footer><h1>푸터입니다.</h1></footer>
            </div>
        );
    }
}

export default Footer;//Footer 내보내기