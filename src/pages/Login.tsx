import axios from "axios";
import { useNavigate } from "react-router-dom";
import key from "../constants/key";
import { setWebSocket, setAuthorizationAccessToken } from "../store/store";
import { useDispatch } from "react-redux";
import useSWR from "swr";


export default function Login(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useSelector
    
    // 실시간 웹소켓 접속키
    // swr로 실시간 관리 필요
    const createWebSocket = async (url: string) => {
        await axios.post(url, key.webSocketKey)
        .then(socket=>{
            console.log(socket.data);
            return socket;
        })
    }

    // 접근 토큰 발급
    const createAuthorizationAccessToken = async(url: string) => {
        await axios.post(url, key.appTokenKey)
        .then(token=>{
            console.log("token:::", token);
            return token;
        })
    }

    // 웹소켓과 인증토큰 발급
    const toMainPage = () => {
        const {data:  webSocket, isLoading, error} = useSWR("/oauth2/Approval", createWebSocket);
        dispatch(setWebSocket(webSocket));

        const accessToken = useSWR("/oauth2/tokenP", createAuthorizationAccessToken);
        dispatch(setAuthorizationAccessToken(accessToken));
        navigate("/main");
    }

    return (
        <div> 
            로그인 페이지입니다.
            <br/>
            아이디 <input/> 
            <br/>
            패스워드<input/> 
            <br/>
            <button onClick={toMainPage}>로그인</button>
        </div>
    )
}