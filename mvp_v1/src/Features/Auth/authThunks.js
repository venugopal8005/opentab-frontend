import api from "../../api/axios";
import { authStart, authSuccess, authLogout } from "./UserSlice";

export const checkAuth = () => async (dispatch) => {
  dispatch(authStart());

  try {
    const res = await api.get("/auth/me", {
      withCredentials: true,
    });

    dispatch(authSuccess(res.data.user));
  } catch (err) {
    dispatch(authLogout());
  }
};
