import _ from "lodash";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findUserProfile } from "../../api/GetAPI";
import { UserInfoIE } from "../../api/interface";
import { getLocalStorageItem } from "../../core";
import { setUserInfoAction } from "../../redux/action";
import { ReduxStoreType } from "../../redux/type";

const useAuth = (): void => {
  const { reduxStore: { userStore } } = useSelector((state: ReduxStoreType) => state);

  const initUserProfile = async (): Promise<void> => {
    const profile: UserInfoIE = await findUserProfile();
    
    setUserInfoAction({
      user: {
        isLogin: true,
        info: { ...profile },
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    const token = getLocalStorageItem("token");
    // 로그인이 된 상태라면
    if (!_.isNull(token) && !userStore.user.isLogin) {
      initUserProfile();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAuth;