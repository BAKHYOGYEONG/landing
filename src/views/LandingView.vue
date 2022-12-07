<template>
  <div>
    <div class="imageSize">
      <div>
        <div>
          <img src="@/assets/image/contents.png" class="imageSize2" />
        </div>
        <div>
          <a class="js-scroll-trigger" v-bind:href="url"
            ><img class="scrollspy imageSize2" src="@/assets/image/scroll.png"
          /></a>
        </div>
      </div>
    </div>

    <div id="about1">
            <h1 class="titleStyle">상담문의</h1>
          </div>
          <form
            name="form"
            class="form-floating container"
            @submit.prevent="saveLanding"
          >
            <div class="input-group mb-3 form-floating boxSize">
              <!-- <span class="input-group-text" id="basic-addon1">신청자 이름</span> -->
              <input
                type="text"
                class="form-control"
                placeholder="성함"
                required
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-validate="'required'"
                data-vv-as="name"
                id="name"
                name="name"
                v-model="landing.name"
              />
              <label
                v-if="!(errors.has('name') && submitted)"
                class="form-label"
                for="floatingInputName"
                >접수이름</label
              >
              <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
              <label
                v-else
                class="alert-white text-danger"
                for="floatingInputName"
                role="alert"
              >
                접수 이름이 필요합니다!
              </label>
            </div>
            <div class="input-group mb-3 form-floating">
              <!-- <span class="input-group-text" id="basic-addon1">전화번호</span> -->
              <input
                type="number"
                class="form-control"
                placeholder=" '-' 없이 작성해주세요"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-validate="'required|min:9|max:11'"
                data-vv-as="Phone"
                id="floatingInputPhone"
                name="phone"
                v-model="landing.phone"
                maxlength="11"
                minlength="9"
                oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
              />
              <label
                v-if="!(errors.has('phone') && submitted)"
                class="form-label"
                for="floatingInputPhone"
                >휴대폰번호 ('-'를 제외하고 입력해주세요)</label
              >
              <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
              <label
                v-else
                class="alert-white text-danger"
                for="floatingInputPhone"
                role="alert"
              >
                휴대폰 번호가 필요합니다!
              </label>
            </div>
            <div class="input-group mb-3 form-floating">
              <!-- <span class="input-group-text" id="basic-addon1">상호명</span> -->
              <input
                type="text"
                class="form-control"
                placeholder="상호명"
                required
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-validate="'required'"
                data-vv-as="businessName"
                id="businessName"
                name="businessName"
                v-model="landing.businessName"
              />
              <label
                v-if="!(errors.has('businessName') && submitted)"
                class="form-label"
                for="floatingInputBusinessName"
                >상호명</label
              >
              <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
              <label
                v-else
                class="alert-white text-danger"
                for="floatingInputBusinessName"
                role="alert"
              >
                상호명이 필요합니다!
              </label>
            </div>
            <div class="radiostyle radioLine">
              <span class="input-group moneyText"
                >사업자 창업·운영자금 (단위 : 만원)</span
              >
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="300"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  300
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="500"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  500
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="1000"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  1000
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="2000"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  2000
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="2500"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  2500
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="capital"
                  name="capital"
                  v-model="landing.capital"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  기타
                </label>
              </div>
              <div class="radiostyle">
                <input
                  type="text"
                  class="form-control"
                  placeholder="금액입력(단위: 만원)"
                  required
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  v-validate="'required'"
                  data-vv-as="capital"
                  id="capital"
                  name="capital"
                  v-model="landing.capital2"
                  v-if="landing.capital == '1' ? true : false"
                />
                <label
                  v-if="!(errors.has('capital') && submitted)"
                  class="form-label"
                  for="floatingInputName"
                ></label>
                <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
                <label
                  v-else
                  class="alert-white text-danger"
                  for="floatingInputName"
                  role="alert"
                >
                  금액 입력 필요합니다!
                </label>
              </div>
            </div>

            <div class="input-group mb-3 form-floating">
              <!-- <span class="input-group-text" id="basic-addon1">지역</span> -->
              <input
                type="text"
                class="form-control"
                placeholder="지역"
                required
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-validate="'required'"
                data-vv-as="location"
                id="location"
                name="location"
                v-model="landing.location"
              />
              <label
                v-if="!(errors.has('location') && submitted)"
                class="form-label"
                for="floatingInputLocation"
                >지역명</label
              >
              <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
              <label
                v-else
                class="alert-white text-danger"
                for="floatingInputLocation"
                role="alert"
              >
                지역명이 필요합니다!
              </label>
            </div>

            <div
              class="input-group mb-3 form-floating emailNotice centerNotice"
            >
              <p class="textmargin">
                창업, 운영자금 플랜 신청시 사업자등록증 및 명함을 아래의 양식에
                맞추어 <br /><span class="textcolor">imb2bcost@naver.com</span>
                으로 보내주시면 원활한 상담이 가능합니다.
              </p>
              <br />
              <img class="imageSize3" src="@/assets/image/example.png" />
            </div>

            <div class="input-group form-floating">
              <!-- <span class="input-group-text">상담내용</span> -->
              <textarea
                class="form-control"
                aria-label="With textarea"
                v-validate="'required'"
                data-vv-as="content"
                id="content"
                name="content"
                v-model="landing.content"
              ></textarea>
              <label
                v-if="!(errors.has('content') && submitted)"
                class="form-label"
                for="floatingInputContent"
                >상담내용</label
              >
              <!--submit 버튼을 누르고 && 유효성에러가 발생했을 경우 아래 내용이 출력-->
              <label
                v-else
                class="alert-white text-danger"
                for="floatingInputContent"
                role="alert"
              >
                상담내용을 입력해주세요!
              </label>
            </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed textcenter"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    개인정보 수집 및 제3자 이용동의
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      수집하는 개인정보 항목<br />

                      비투비코스트는 상담, 서비스 신청 등을 위해 아래와 같은
                      개인정보를 수집하고 있습니다.<br />

                      1. 필수항목 : 이름, 상호명, 연락처<br />

                      2. 자동수집항목 : 서비스 이용기록, 접속 로그, 쿠키, 접속
                      IP 정보<br />

                      <br />
                      개인정보의 수집 및 이용목적<br />

                      비투비코스트는 수집한 개인정보를 다음의 목적을 위해
                      활용합니다.<br />

                      1. 서비스 이용에 따른 본인식별, 실명확인<br />

                      2. 고지사항 전달, 의사소통 경로 확보, 제품 설치시 정확한
                      배송지 정보 확보<br />

                      3. 신규 서비스 등 최신정보 개인 맞춤 서비스 제공을 위한
                      자료<br />

                      4. 부정 이용 방지 및 비인가 사용 방지<br />

                      5. 기타 원활한 양질의 서비스 제공<br />
                      <br />

                      개인정보 제3자 제공 동의<br />

                      (1) 서비스 안내 및 이용권유 등<br />

                      ① 제공받는 자 : 비투비코스트<br />

                      ② 제공목적 : 설치 관련 문의 확인 및 답변을 위한 연락통지,
                      처리결과 통보 등을 목적으로 개인정보를 처리합니다.<br />

                      ③ 수집항목 : 이름, 상호명, 연락처<br />

                      ④ 수집 및 이용기간 : 문의 종료일로 2년까지<br />
                      <br />

                      회원님은 동의를 거부할 권리가 있으며 동의 거부 시에도
                      서비스 이용에 제한이 없습니다. 다만 서비스 이용권유,
                      판촉행사 등의 유익한 정보를 받으실 수 없습니다. <br />

                      <br />
                      <br />

                      개인정보의 보유 및 이용기간<br />

                      원칙적으로 개인정보의 수집 또는 제공받은 목적 달성 시 지체
                      없이 파기합니다.<br />

                      회원으로서 (주)비투비코스트에서 제공하는 서비스 이용기간
                      동안 회원님의 개인정보는 '(주)비투비코스트'에서 계속
                      보유하게 되나 원칙적으로 개인정보의 수집 또는 제공받은
                      목적 달성 시 지체 없이 파기합니다.<br />
                      <br />

                      개인정보의 파기절차 및 방법<br />

                      (주)비투비코스트는 원칙적으로 개인정보 수집 및 이용목적이
                      달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및
                      방법은 다음과 같습니다.<br />

                      ο 파기절차<br />

                      회원님이 상담을 위해 입력하신 정보는 목적이 달성된 후
                      별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및
                      기타 관련 법령에 의한 정보보호 사유에 따라(보유 및
                      이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도
                      DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는
                      보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br />

                      ο 파기방법<br />

                      - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수
                      없는 기술적 방법을 사용하여 삭제합니다.<br />
                      <br />

                      개인정보<br />

                      비투비코스트는 이용자의 개인정보를 원칙적으로 외부에
                      제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br />

                      - 이용자들이 사전에 동의한 경우<br />

                      - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                      절차와 방법에 따라 수사기관의 요구가 있는 경우<br />

                      수집한 개인정보의 위탁<br />

                      비투비코스트는 고객님의 동의없이 고객님의 정보를 외부
                      업체에 위탁하지 않습니다.<br />

                      향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무
                      내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를
                      받도록 하겠습니다.<br />
                      <br />

                      이용자 및 법정대리인의 권리와 그 행사방법<br />

                      이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은
                      당해 만 14세 미만 아동의 개인정보를 조회하거나 수정 요청할
                      수도 있습니다.<br />

                      귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는
                      정정을 완료하기 전까지 개인정보를 이용 또는 제공하지
                      않습니다.<br />

                      또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
                      처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
                      하겠습니다.<br />

                      비투비코스트는 이용자 혹은 법정 대리인의 요청에 의해 해지
                      또는 삭제된 개인정보는 (주)비투비코스트가 수집하는
                      개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고
                      그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
                      있습니다.<br />
                      <br />

                      개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한
                      사항<br />

                      비투비코스트는 귀하의 정보를 수시로 저장하고 찾아내는
                      '쿠키(cookie)' 등을 운용합니다.<br />

                      쿠키란 비투비코스트의 웹사이트를 운영하는데 이용되는
                      서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서
                      귀하의 컴퓨터 하드디스크에 저장됩니다.<br />

                      비투비코스트는 다음과 같은 목적을 위해 쿠키를
                      사용합니다.<br />
                      <br />

                      쿠키 등 사용 목적<br />

                      - 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
                      관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및
                      방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스
                      제공<br />

                      <br />

                      쿠키 설정 거부 방법<br />

                      설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의
                      도구 > 인터넷 옵션 > 개인정보<br />

                      단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에
                      어려움이 있을 수 있습니다.<br />
                      <br />

                      개인정보 관리 책임자<br />

                      비투비코스트는 고객의 개인정보를 보호하고 개인정보와
                      관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및
                      개인정보관리책임자를 지정하고 있습니다.<br />

                      개인정보관리책임자 성명 : 이주일<br />

                      TEL : 1668-0220 | FAX : 051 - 866 - 6033<br />

                      이메일 : yesmpro@naver.com<br />

                      기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는
                      아래 기관에 문의하시기 바랍니다.<br />

                      1.개인분쟁조정위원회 (www.1336.or.kr/1336)<br />

                      2.정보보호마크인증위원회
                      (www.eprivacy.or.kr/02-580-0533~4)<br />

                      3.대검찰청 인터넷범죄수사센터
                      (http://icic.sppo.go.kr/02-3480-3600)<br />

                      4.경찰청 사이버테러대응센터
                      (www.ctrc.go.kr/02-392-0330)<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="agreeStyle">
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="agree"
                  name="agree"
                  v-model="agree"
                  value="0"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  동의함
                </label>
              </div>
              <div class="form-check radiostyle">
                <input
                  class="form-check-input"
                  type="radio"
                  id="disagree"
                  name="agree"
                  v-model="agree"
                  value="1"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  동의하지않음
                </label>
              </div>
            </div>
            <br />
            <div class="d-grid gap-2 col-6 mx-auto">
              <button
                class="btn btn-primary buttonMargin"
                :disabled="agree == 1"
              >
                문의하기
              </button>
            </div>
          </form>



    <div class="accordion accordion-flush container widthFix" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed textcenter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              개인정보 수집 및 제3자 이용동의
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                수집하는 개인정보 항목<br />

                비투비코스트는 상담, 서비스 신청 등을 위해 아래와 같은
                개인정보를 수집하고 있습니다.<br />

                1. 필수항목 : 이름, 상호명, 연락처<br />

                2. 자동수집항목 : 서비스 이용기록, 접속 로그, 쿠키, 접속 IP
                정보<br />

                <br />
                개인정보의 수집 및 이용목적<br />

                비투비코스트는 수집한 개인정보를 다음의 목적을 위해
                활용합니다.<br />

                1. 서비스 이용에 따른 본인식별, 실명확인<br />

                2. 고지사항 전달, 의사소통 경로 확보, 제품 설치시 정확한 배송지
                정보 확보<br />

                3. 신규 서비스 등 최신정보 개인 맞춤 서비스 제공을 위한 자료<br />

                4. 부정 이용 방지 및 비인가 사용 방지<br />

                5. 기타 원활한 양질의 서비스 제공<br />
                <br />

                개인정보 제3자 제공 동의<br />

                (1) 서비스 안내 및 이용권유 등<br />

                ① 제공받는 자 : 비투비코스트<br />

                ② 제공목적 : 설치 관련 문의 확인 및 답변을 위한 연락통지,
                처리결과 통보 등을 목적으로 개인정보를 처리합니다.<br />

                ③ 수집항목 : 이름, 상호명, 연락처<br />

                ④ 수집 및 이용기간 : 문의 종료일로 2년까지<br />
                <br />

                회원님은 동의를 거부할 권리가 있으며 동의 거부 시에도 서비스
                이용에 제한이 없습니다. 다만 서비스 이용권유, 판촉행사 등의
                유익한 정보를 받으실 수 없습니다. <br />

                <br />
                <br />

                개인정보의 보유 및 이용기간<br />

                원칙적으로 개인정보의 수집 또는 제공받은 목적 달성 시 지체 없이
                파기합니다.<br />

                회원으로서 (주)비투비코스트에서 제공하는 서비스 이용기간 동안
                회원님의 개인정보는 '(주)비투비코스트'에서 계속 보유하게 되나
                원칙적으로 개인정보의 수집 또는 제공받은 목적 달성 시 지체 없이
                파기합니다.<br />
                <br />

                개인정보의 파기절차 및 방법<br />

                (주)비투비코스트는 원칙적으로 개인정보 수집 및 이용목적이 달성된
                후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은
                다음과 같습니다.<br />

                ο 파기절차<br />

                회원님이 상담을 위해 입력하신 정보는 목적이 달성된 후 별도의
                DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련
                법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정
                기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는
                법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로
                이용되지 않습니다.<br />

                ο 파기방법<br />

                - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
                기술적 방법을 사용하여 삭제합니다.<br />
                <br />

                개인정보<br />

                비투비코스트는 이용자의 개인정보를 원칙적으로 외부에 제공하지
                않습니다. 다만, 아래의 경우에는 예외로 합니다.<br />

                - 이용자들이 사전에 동의한 경우<br />

                - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                방법에 따라 수사기관의 요구가 있는 경우<br />

                수집한 개인정보의 위탁<br />

                비투비코스트는 고객님의 동의없이 고객님의 정보를 외부 업체에
                위탁하지 않습니다.<br />

                향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에
                대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록
                하겠습니다.<br />
                <br />

                이용자 및 법정대리인의 권리와 그 행사방법<br />

                이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만
                14세 미만 아동의 개인정보를 조회하거나 수정 요청할 수도
                있습니다.<br />

                귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
                완료하기 전까지 개인정보를 이용 또는 제공하지 않습니다.<br />

                또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
                처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
                하겠습니다.<br />

                비투비코스트는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는
                삭제된 개인정보는 (주)비투비코스트가 수집하는 개인정보의 보유 및
                이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는
                이용할 수 없도록 처리하고 있습니다.<br />
                <br />

                개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br />

                비투비코스트는 귀하의 정보를 수시로 저장하고 찾아내는
                '쿠키(cookie)' 등을 운용합니다.<br />

                쿠키란 비투비코스트의 웹사이트를 운영하는데 이용되는 서버가
                귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
                하드디스크에 저장됩니다.<br />

                비투비코스트는 다음과 같은 목적을 위해 쿠키를 사용합니다.<br />
                <br />

                쿠키 등 사용 목적<br />

                - 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를
                파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을
                통한 타겟 마케팅 및 개인 맞춤 서비스 제공<br />

                <br />

                쿠키 설정 거부 방법<br />

                설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구
                > 인터넷 옵션 > 개인정보<br />

                단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이
                있을 수 있습니다.<br />
                <br />

                개인정보 관리 책임자<br />

                비투비코스트는 고객의 개인정보를 보호하고 개인정보와 관련한
                불만을 처리하기 위하여 아래와 같이 관련 부서 및
                개인정보관리책임자를 지정하고 있습니다.<br />

                개인정보관리책임자 성명 : 이주일<br />

                TEL : 1668-0220 | FAX : 051 - 866 - 6033<br />

                이메일 : yesmpro@naver.com<br />

                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
                기관에 문의하시기 바랍니다.<br />

                1.개인분쟁조정위원회 (www.1336.or.kr/1336)<br />

                2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)<br />

                3.대검찰청 인터넷범죄수사센터
                (http://icic.sppo.go.kr/02-3480-3600)<br />

                4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)<br />
              </p>
            </div>
          </div>
        </div>
      </div>

    <div>
      <a class="js-scroll-trigger" v-bind:href="url">
        <img src="../assets/image/fixscroll.png" class="fixscroll" />
      </a>
    </div>
  </div>
</template>

<script>
import LandingService from "@/services/LandingService";

/*eslint-disable*/

export default {
  name: "LandingView",

  data() {
    return {
      landing: {
        // id: null,
        name: "",
        phone: "",
        businessName: "",
        capital: "",
        capital2: "",
        location: "",
        content: "",
      },
      agree: 1,
      message: "",
      submitted: false,
      successful: false,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScpxpaKC61Lbo5kHvZuBG9hisyn6-CPrkqYQp9ff3RmoLzCWw/viewform?usp=sf_link",
    };
  },

  computed: {
    deletevalue() {
      if (
        this.landing.capital == "300" ||
        "500" ||
        "1000" ||
        "2000" ||
        "2500"
      ) {
        return (this.landing.capital2 = "0");
      }
    },
  },

  methods: {
    saveLanding() {
      //  회원 임시 객체 만들기
      this.message = "";
      this.submitted = true;
      // 유효성 체크 로직 실행 ( Vee-Validate 이용)
      // $validator.validate() 입력양식 유효성 체크가 통과하면
      // isValid = true
      this.$validator.validate().then((isValid) => {
        // isValid = true 일때만 아래가 실행됨
        if (isValid && confirm("상담문의를 등록 하시겠습니까?")) {
          // springBoot 서버 통신 : 공유저장소의 비동기메소드 호출(register)
          // this.user.address = this.address

          let data = {
            name: this.landing.name,
            phone: this.landing.phone,
            businessName: this.landing.businessName,
            capital: this.landing.capital,
            capital2: this.landing.capital2,
            location: this.landing.location,
            content: this.landing.content,
          };
          // console.log(this.user)
          // this.user.phone = this.user.phone.split('-').join()
          LandingService.create(data) 
            // 성공 / 실패 then
            // 성공하면 첫번째 매개변수 실행
            // 실패하면 두번째 매개변수 실행
            .then(
              // 성공
              (data) => {
                this.message = data.message;
                this.successful = true;
                // 강제 페이지 전환 : login
                alert("상담문의가 등록되었습니다.");
                // this.$router.push("/");
                this.$router.go();
              },
              // 실패
              (error) => {
                this.message =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                console.log("실패(error)");
                this.successful = false;
              }
            );
        }
      });

      // if (confirm("상담문의를 등록 하시겠습니까?")) {
      //   let data = {
      //     name: this.landing.name,
      //     phone: this.landing.phone,
      //     businessName: this.landing.businessName,
      //     capital: this.landing.capital,
      //     location: this.landing.location,
      //     content: this.landing.content,
      //   };
      //   LandingService.create(data)
      //     .then((response) => {
      //       this.landing.id = response.data.id;
      //       this.submitted = true;
      //       // this.$router.push({ name: 'landing' })
      //     })
      //     .catch((e) => {
      //       alert(e);
      //     });
      // }
    },

    // deletemoney() {
    //   if (this.landing.capital !== "1") {
    //     return (this.landing.capital2 = null);
    //   }
    // },

    // deletevalue() {
    //   if (this.landing.capital == '300' || '500' || '1000' || '2000' || '2500') {
    //     return this.landing.capital2 = null;
    //   }
    // },
  },
  // 화면이 뜨자마자 실행되는 이벤트
  mounted() {
    if (this.landing.capital == "300" || "500" || "1000" || "2000" || "2500") {
      return (this.landing.capital2 = "0");
    }

    // window.addEventListener(click, this.deletevalue())
    // if (this.landing.capital == "300" || "500" || "1000" || "2000" || "2500") {
    //   return (this.landing.capital2 = null);
    // }
  },
  watch: {
    deletevalue() {
      if (
        this.landing.capital == "300" ||
        "500" ||
        "1000" ||
        "2000" ||
        "2500"
      ) {
        return (this.landing.capital2 = "0");
      }
    },
  },
  created() {
    if (this.landing.capital == "300" || "500" || "1000" || "2000" || "2500") {
      return (this.landing.capital2 = "0");
    }
  },
};
</script>

<style>
.radiostyle {
  float: left;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
}

.radioLine {
  border: solid 1px #cdcdcd;
  border-radius: 4px;
  width: 100%;
}
/* .boxSize {
  height: 20px;
} */

/* .scrollspy { */
  /* margin-bottom: 80px; */
/* } */

.imageSize {
  /* width: 80%; */
  display: flex;
  justify-content: center;
  margin: auto;
}

.imageSize2 {
  width: 100%;
}
.imageSize3 {
  width: 60%;
  /* padding-left: 20px; */
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.textcolor {
  color: rgb(56, 56, 255);
  font-weight: bold;
}
.textmargin {
  margin: 15px 0 20px 0px;
  text-align: center;
}

.centerNotice {
  text-align: center;
  display: flex;
  justify-content: center;
}

.agreeStyle {
  display: flex;
  justify-content: center;
  margin: auto;
}

.textcenter {
  text-align: center;
  border: solid 1px #cdcdcd;
  margin-top: 50px;
}

.emailNotice {
  border: solid 1px #cdcdcd;
  border-radius: 4px;
  width: 100%;
}

.buttonMargin {
  margin-bottom: 100px;
}

.moneyText {
  margin: 10px 0 0 0;
  margin-bottom: 10px;
}
.fixscroll {
  position: fixed;
  bottom: 0;
  right: 0px;
  z-index: 99;
  width: 200px;
}

.titleStyle {
  text-align: center;
  margin-bottom: 50px;
  font-size: 4rem;
  font-weight: bold;
}


.widthFix {
  margin-bottom: 100px;
}
/* @media screen and (min-width: 992px) {
  .mobilead {
    display: none;
  }
}

.mobilead {
  display: flex;
  justify-content: center;
} */
</style>
