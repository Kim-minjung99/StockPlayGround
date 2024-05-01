import { configureStore, createSlice } from "@reduxjs/toolkit";

// store내부 state생성
let testStore = createSlice({
    name: "user",
    initialState: "",
    reducers: {
        addUser(state, action){
            console.log('User::', state, action);
        }
    }
});

export let { addUser } = testStore.actions;

// 로그인 인증확인 여부
let isAuthedUser = createSlice({
    name: "isAuthedUser",
    initialState: false,
    reducers: {
        // 인증확인 setting
        setAuthenticate(state, action){
            // state : 현재 인증 상태, action : 전달받은 payload
            state = true;
        },
        // 인증불가 setting
        setUnAuthenticated(state){
            state = false;
        },
        getIsAuthedUser(state){
            return state;
        }
    }
});

export let { setAuthenticate, setUnAuthenticated, getIsAuthedUser } = isAuthedUser.actions;

// 인증 정보 (인증 시각, 인증 키, 인증받은 유저명... 등)
let authedInfo = createSlice({
    name: "authedInfo",
    initialState: {
        authedTime: "",
        authedUserName: ""
    },
    reducers: {
        getAuthedInfo(state, action){
            return state;
        },
        setAuthedInfo(state, action){
            state = action.payload.authedInfo;
        }
    }
});

export let { getAuthedInfo, setAuthedInfo } = authedInfo.actions;

// acccessToken 정보
let authorizationAccessToken = createSlice({
    name: "authorizationAccessToken",
    initialState: {},
    reducers: {
        setAuthorizationAccessToken(state, action){
            state = action.payload.accessToken;
        }
    }
});

export let { setAuthorizationAccessToken } = authorizationAccessToken.actions;

// 실시간 webSocket 정보
let webSocket = createSlice({
    name: "webSocket",
    initialState: {
        approvalKey: ""
    },
    reducers: {
        setWebSocket(state, action){
            state = action.payload.webSocket;
        },
    }
});

export let { setWebSocket } = webSocket.actions;

// 인증토큰 정보

export default configureStore(
    {
        reducer: {
            testStore: testStore.reducer,
            isAuthedUser: isAuthedUser.reducer,
            authedInfo: authedInfo.reducer,
            authorizationAccessToken: authorizationAccessToken.reducer,
            webSocket: webSocket.reducer
        },
        middleware: undefined,

    }
);