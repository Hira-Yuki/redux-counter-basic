// 초기 상태값 (State)
const initialState = {
    userid: 1234,
};


// 리듀서 : 'state에 변화를 일으키는' 함수
// input : state와 action
const users = (state = initialState, action)=> {
    switch(action.type) {
        default:
            return state;
    }
}

export default users;