import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  jwtToken: localStorage.getItem("jwtToken"),
  name: localStorage.getItem("name"),
  username: localStorage.getItem("username"),
  basket: []
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'setBasket':
      return { ...state, ...rest }
    case 'setJWT':
      localStorage.setItem("jwtToken", rest.jwtToken);
      return { ...state, ...rest }
    case "signout":
      localStorage.setItem("jwtToken", null);
      localStorage.setItem("name", null);
      return {
        ...state,
        jwtToken: "",
        username: localStorage.getItem("username")
      };
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
