import React, {Component} from 'react';//react플러그인을 js파일로 불러온다.

class Map extends Component {//맵영역에 들어가는 컴포넌트명
    render(){//가상의 돔으로 출력
        return(//구현할 ui내용
            <div>
              <h2 className='title02'>맵페이지 입니다.</h2>
            </div>
        );
    }
}

export default Map;