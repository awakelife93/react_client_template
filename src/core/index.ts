import {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
} from "./storage";
import {
  initWindowObject,
  getWindowData,
  removeWindowData,
  clearWindowData,
  setWindowData,
} from "./window";
import i18n from "./i18n";
import { I18nCommandEnum } from "./i18n/type";
import { FadeIn } from "./animation";
import { Move } from "./animation";

const __DEV__ = window.location.hostname === "localhost";
const endPoint = "http://localhost:3001/";

export {
  getLocalStorageItem,
  setLocalStorageItem,
  clearLocalStorageItem,
  removeLocalStorageItem,
  initWindowObject,
  getWindowData,
  removeWindowData,
  clearWindowData,
  setWindowData,
  i18n,
  I18nCommandEnum,
  FadeIn,
  Move,
  __DEV__,
  endPoint,
};
