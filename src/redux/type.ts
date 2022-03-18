import { ContentsType } from "@/api/GetAPI/type";
import { ModalItem } from "@/common/components/Modal/type";
import { ThemeItem } from "@/common/type";

export type UseReduxType = "reduxLib" | "reduxToolkit";

export type ContentsStoreType = {
  contents: ContentsType[];
};

export type ThemeStoreType = {
  useTheme: boolean;
  themeItem: ThemeItem;
};

export type GlobalStoreType = {
  isShowAdContainer: boolean;
  modalItem: ModalItem;
};

export type UserStoreType = {
  user: {
    isLogin: boolean;
    info: {
      userId: number;
      email: string;
      name: string;
    };
  };
};

export type StateType = {
  contentsStore: ContentsStoreType;
  themeStore: ThemeStoreType;
  globalStore: GlobalStoreType;
  userStore: UserStoreType;
};

export type ReduxStoreType = {
  reduxStore: StateType;
};

export type ReduxActionProviderType = {
  initThemeAction: VoidFunction;
  setThemeAction: (value: boolean) => void;
  setThemeItemAction: (value: ThemeItem) => void;
  initShowAdAction: VoidFunction;
  showAdAction: (value: boolean) => void;
  initShowModalAction: VoidFunction;
  showModalAction: (value: ModalItem) => void;
  setUserInfoAction: (value: UserStoreType) => void;
  initUserInfoAction: VoidFunction;
};

/**
 * @description
 * Redux Action Type 정의
 */
export enum ActionEnum {
  SET_USER_INFO = "SET_USER_INFO",
  GET_CONTENTS = "GET_CONTENTS",
  SET_THEME_MODE = "SET_THEME_MODE",
  SET_THEME_ITEM = "SET_THEME_ITEM",
  SET_AD_CONTAINER = "SET_AD_CONTAINER",
  SET_MODAL_ITEM = "SET_MODAL_ITEM",
}
