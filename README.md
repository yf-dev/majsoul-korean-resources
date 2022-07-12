2022년 7월 13일 이후 [작혼 EN 서버의 공식 한글화](https://twitter.com/MahjongSoul_KR/status/1546330081433653248?s=20&t=l3fLKBhAIZvzGjrDaX5ycw)가 적용됩니다.
따라서 2022년 7월 13일부터는 본 프로젝트를 사용하지 않는 것을 권장합니다.

2022년 7월 13일 이후에 본 프로젝트를 활성화했을 경우 정상적으로 공식 한글화가 적용되지 않을 수 있으므로
[majsoul-plus-korean.user.js](https://github.com/yf-dev/majsoul-korean-resources/raw/main/majsoul-plus-korean.user.js)에서 한국어 리소스를 불러오는 코드를 주석 처리하였습니다.
만약 강제로 본 프로젝트를 다시 적용하려면 [커밋](https://github.com/yf-dev/majsoul-korean-resources/commit/79dded9f6f79e3bbd9fb8cd3e664c4c05ec43294) 내용을 참고하여 다시 주석을 해제하여 사용해주세요.

---

# :rotating_light: 경고 :rotating_light:

현재 [작혼 Plus 사용시 계정 밴 사례](https://github.com/MajsoulPlus/majsoul-plus/issues/127)가 보고되었습니다.  
해당 문제가 해결될 때까지 [작혼 Plus](https://github.com/MajsoulPlus/majsoul-plus)를 사용하지 않는 것을 권장드립니다.

---

작혼 한국어 리소스
==================

[작혼 Plus: 한국어 리소스 팩](https://github.com/yf-dev/majsoul-plus-korean)의 최신 내용을 자동으로 게임에 적용하는 Userscript와 [작혼 Plus](https://github.com/MajsoulPlus/majsoul-plus) 확장입니다.


### ⚠️ 주의사항 ⚠️

본 리소스 팩을 사용함에 따라 발생하는 모든 문제(예시: 계정 밴, 민사소송)에 대해 저희는 책임을 지지 않습니다.  
당신은 이 리소스 팩을 사용했을 경우 이러한 주의사항을 확인하고 동의한 것입니다.


### 1. 요구사양

- [작혼 Plus](https://github.com/MajsoulPlus/majsoul-plus) Version 2.0.0 이상
    - 작혼 글로벌 서버 환경(작혼 Plus의 Settings에서 User Data의 Server to play 값을 2로 설정)
- 또는, [Tampermonkey](https://www.tampermonkey.net/)를 지원하는 브라우저
    - Greasemonkey, Violentmonkey 등의 Userscript 환경에서는 테스트하지 않았습니다.


### 2. 적용방법

#### 2.1. Tampermonkey

1. [Tampermonkey](https://www.tampermonkey.net/)를 설치합니다.
2. [majsoul-plus-korean.user.js](https://github.com/yf-dev/majsoul-korean-resources/raw/main/majsoul-plus-korean.user.js)를 클릭한 후 설치 버튼을 클릭합니다.
3. [작혼](https://mahjongsoul.game.yo-star.com/)에 접속하여 적용을 확인합니다.

#### 2.2. 작혼 Plus

1. [릴리즈 페이지](https://github.com/yf-dev/majsoul-korean-resources/releases)에서 `koreanEn.<버전>.mspe`을 클릭하여 다운로드합니다.
2. 작혼 Plus 런처를 실행하고, 좌측 `확장` 메뉴를 선택합니다.
3. 다운로드한 `koreanEn.<버전>.mspe`을 작혼 Plus 런처 위로 끌어서 놓습니다.
4. 나타난 `한국어(글로벌 서버)` 확장을 활성화합니다.
5. `게임 실행` 버튼을 클릭하여 적용을 확인합니다.


### 3. 업데이트

기본적으로 한국어 리소스는 자동으로 업데이트가 적용되므로, 별도의 업데이트는 필요하지 않습니다.

그러나, 작혼 Plus용 확장의 경우에는 드물게 업데이트가 필요할 수 있습니다.  
이 경우에는 [릴리즈 페이지](https://github.com/yf-dev/majsoul-korean-resources/releases)에서 최신 확장을 다운받아 재설치해주세요.


### License

MIT (resources 디렉터리의 내용은 라이선스 내용에 포함되지 않습니다.)
