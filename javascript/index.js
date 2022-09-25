import * as querySelector from './common/query-selector.js';
import { changeHiddenAttribute } from './title.js';
import { kakaoLogin, kakaoLogout } from './auth/kakao.js';

/**
 * define all event listeners
 */

querySelector.buttonEL.addEventListener('click', () => {
    changeHiddenAttribute(document.querySelector('.title'));
})

// kakao login
querySelector.kakaoLoginLIEL.addEventListener('click', () => {
    kakaoLogin();
})

// kakao logout
querySelector.kakaoLogoutLIEL.addEventListener('click', () => {
    kakaoLogout();
})