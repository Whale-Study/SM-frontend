const KAKAO_JAVASCRIPT_KEY = 'e9bf248d7be3957dd5469ed4319e6794';

Kakao.init(KAKAO_JAVASCRIPT_KEY);

// 카카오 로그인 초기화 확인 콘솔
console.log(Kakao.isInitialized());

//카카오로그인
export function kakaoLogin() {
    Kakao.Auth.login({
        success: function (response) {
        Kakao.API.request({
            url: '/v2/user/me',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
            console.log(error)
            },
        })
        },
        fail: function (error) {
        console.log(error)
        },
    })
}

//카카오로그아웃  
export function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
            console.log(response)
        },
        fail: function (error) {
            console.log(error)
        },
        })
        Kakao.Auth.setAccessToken(undefined)
    }
    }  