import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.

class Main extends Component {//메인영역에 들어가는 컴포넌트명
    render(){//가상의 돔으로 출력
        return(//구현할 ui내용
            <div>
                <main><h2 className='title01'>메인입니다.</h2></main>
            </div>
        );
    }
}

export default Main;//Main 내보내기