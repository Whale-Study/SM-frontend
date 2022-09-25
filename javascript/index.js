import * as querySelector from './common/query-selector.js';
import { kakaoLogin, kakaoLogout } from './auth/kakao.js';

/**
 * define all event listeners
 */

// kakao login
querySelector.kakaoLoginLIEL.addEventListener('click', () => {
    kakaoLogin();
})

// kakao logout
querySelector.kakaoLogoutLIEL.addEventListener('click', () => {
    kakaoLogout();
})