import { CLOSE_DRAWER, OPEN_DRAWER } from "../actions/types";

const initialState = {
  open: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLOSE_DRAWER:
      return {
        ...state,
        open: false,
      };
    case OPEN_DRAWER:
      return {
        ...state,
        open: true,
      };
    default:
      return state;
  }
};
