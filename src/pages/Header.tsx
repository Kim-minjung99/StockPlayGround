import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(){

    // access Token
    const accessToken = useSelector<Record<string,string>>((state)=>state.authorizationAccessToken);
    console.log("accessToken",accessToken);

    // import 로는 왜 안되는지 알아보기
    // lodash는 commonJs구현 방식이라서 import * from 'lodash'와 같은 모듈 임포트와는 버전이 맞지 않아 오류가 발생한다.
    var _ = require('lodash');
    if(_.isEmpty(accessToken)){
        return(
            <></>
        );
    }else{
        return(
            <>
                <Link to='/main'>HOME</Link>
                <Link to='/deposit'>예금</Link>
                <Link to='/saving'>적금</Link>
                <Link to='/stock'>주식</Link>
                <Link to='/coin'>코인</Link>
            </>
        );
    }
}