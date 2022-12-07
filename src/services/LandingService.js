import http from '../http-common'

// springboot 연결하기 위한 메소드 정의
class LandingService {
    // 모든 컴플레인 조회

//    컴플레인 데이터를 생성(insert 문 호출)
    create(data) {
        return http.post('/post', data);
    }


}

export default new LandingService()







