import Title from "@/components/title/title.vue";
import ProjectContentComponent from "@/components/projects/projectContentComponent.vue";

export default {
    components:{
        Title,
        ProjectContentComponent
    },
    data(){
        return{
            projectsInfo: [
                // {
                //     name: '로또 추첨앱',
                //     img: 'lottoapp',
                //     datePeople:'2022.11.12~2022.12.19(1인 프로젝트)',
                //     content: '',
                //     source: 'https://github.com/seongchangkim/LottoApp-Kotlin',
                //     domain: '',
                //     skillStack: 'Kotlin',
                //     IDE: 'Android Studio'
                // },
                {
                    name: '자산 포트폴리오 관리 웹사이트',
                    img: 'asset-portfolio-platform',
                    datePeople:'2023.07.09~2023.08.19(1인 프로젝트)',
                    motivation: 'JavaScript로 프론트엔드 및 백엔드를 구현할 수 있는 풀스택이 가능함으로써 Next.js를 활용하여 자산 포트폴리오 관리 웹사이트를 만들게 되었습니다.',
                    introduction: '로그인, 로그아웃, 회원가입, 소셜 로그인, 프로필 상세보기 그리고 프로필 수정 및 삭제 기능 등을 통해 회원이 이용할 수 있고 관리자 전용 웹 페이지를 설정해서 회원 목록, 회원 상세보기, 회원 수정/삭제 기능 등을 통해 회원 관리할 수 있습니다. 그리고 웹 페이지를 통해 자산 포트폴리오를 관리할 수 있습니다.',
                    contents: [
                        'crypto npm 모듈를 통해 pbkdf2 해시 암호화 알고리즘을 적용함으로써 회원에 대한 보안성을 높였습니다.',
                        '가계부 플랫폼과 마찬가지로 jsonwebtoken npm 모듈을 통해 JWT 토큰 부분을 설정한 다음에 JWT 토큰 인증 방식으로 회원을 인증하도록 하여 서버에 부담을 덜하도록 했습니다.',
                        '우분투 안에서 git clone한 뒤에 해당 next 프로젝트에 npm 모듈들을 설치하려고 했는데 너무 느려서 AWS 스왑 램을 늘리는 작업함으로써 우분투 서버 성능을 끌어올렸습니다.',
                        'node.js가 논 블로킹 싱글 스레드인 점에서 성능에 한계가 있었는데 PM2 npm 모듈을 통해 CPU의 멀티 코어 시스템을 사용하게 함으로써 node.js 서버 성능을 끌어올렸습니다.',
                    ],
                    source: 'https://github.com/seongchangkim/asset-portfolio-platform',
                    domain: '',
                    skillStack: 'next.js, node.js, mysql, Exprees.js, React.js, JavaScript(ES6), Amazon EC2, tailwindcss',
                    IDE: 'Visual Studio Code'
                },
                {
                    name: '나만의 개발 포트폴리오 UI 수정(2차)',
                    img: 'portfolio',
                    datePeople: '2023.8.27~8.28(2일)(1인 프로젝트)',
                    motivation: 'vue 인강을 통해 독학했던 개념을 적용하고 싶어서 bootstrap와 같이 사용하여 저만의 포트폴리오를 만들게 되었습니다.',
                    introduction: '포트폴리오 목록, 기술 스택, 나의 소개 그리고 메일 전송 기능을 포함한 웹 애플리케이션입니다.',
                    contents: [
                        '각 웹 페이지 부분에 UI 생성하다 보면 중복된 UI 컴포넌트가 생기는데 공통 컴포넌트를 통해 그 부분을 제거함으로써 웹 페이지에 대한 유지보수성이 높였습니다.'
                    ],
                    source: 'https://github.com/seongchangkim/seongchangkim.github.io',
                    domain: 'https://seongchangkim.github.io/',
                    skillStack:  'Vue, JavaScript, npm, CSS3, HTML5, bootstrap',
                    IDE: 'Visual Studio Code'
                },
                // {
                //     name: '자산 포트폴리오 관리 앱',
                //     img: 'stockprod',
                //     datePeople:'2023.1.5~2023.02.17(1인 프로젝트)',
                //     content: 'Flutter가 다른 앱 네이티브 프로그래밍 언어보다 단기간에 Android과 IOS 둘 다 개발할 수 있어서 주식 포트폴리오 앱 애플리케이션을 만들게 되었습니다. 기능은 회원, 자산 포트폴리오 두 가지로 나누어서 구현했는데 회원에 대한 기능은 로그인, 로그아웃, 회원가입 기능은 백엔드 api 호출하여 구현했고 자산 포트폴리오에 대한 기능은 CRUD(생성, 목록 및 상세 보기, 수정, 삭제) 기능을 백엔드 api 호출하여 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/stock_app',
                //     domain: '',
                //     skillStack: 'Flutter, Dart',
                //     IDE: 'Visual Studio Code'
                // },
                // {
                //     name: '자산 포트폴리오 관리 앱',
                //     img: 'stockprod',
                //     datePeople:'2022.12.18~2023.02.17(2달)(1인 프로젝트)',
                //     content: '인프런에서 Node.js 인강을 완강하고 백엔드 포트폴리오를 만들고 싶고 다른 백엔드 프로그래밍 언어보다 백엔드에서 공통적으로 제공하는 기능들을 쉽게 설정할 수 있어서 만들게 되었습니다. RDBMS 데이터베이스를 쉽게 연동할 수 있는 Sequelize 라이브러리를 써서 적용했고, 회원에 대한 기능에 유용한 JWT 그리고 Bcrypt 라이브러리를 적용했습니다. 왜나하면 로그인할 시 토큰으로 로그인 여부를 확인할 수 있고 bcrypt를 이용하여 비밀번호를 암호화해서 보안성이 좋아지기 때문입니다. 그리고 실제 서버를 호스팅 하고 싶어서 AWS EC2으로 Node.js 서버를 배포했습니다.',
                //     source: 'https://github.com/seongchangkim/stock_server',
                //     domain: '',
                //     skillStack: 'JavaScript, Node.js, Exprees.js, Amazon EC2, MySql',
                //     IDE: 'Visual Studio Code'
                // },
                
                {
                    name: '가계부 플랫폼',
                    img: 'account-book-app',
                    datePeople:'2023.5.11~2023.06.19(33일)(1인 프로젝트)',
                    motivation: '인프런 중에 김영한의 JPA 관련 강의를 듣고 독학했던 내용을 가계부 플랫폼에다 적용하고 싶은 마음이 들었고 Spring boots가 Spring를 편리하게 설정할 수 있고 SOLID 원칙을 지킬 수 있고 QueryDsl 라이브러리를 통해 생산성 있게 개발할 수 있어서 만들게 되었습니다.',
                    introduction: '이 프로젝트는 관리자 전용 웹 및 가계부 앱 등이 있고 웹에서는 관리자 전용으로 로그인하기 때문에 회원 관리를 할 수 있고 프로필 관리를 할 수 있습니다. 그리고 앱에서는 로그인, 로그아웃, 회원가입, 소셜 로그인(카카오), 프로필 관리 기능 및 날짜별로 가계부를 관리할 수 있는 앱 애플리케이션입니다.',
                    contents: [
                        'Spring Security를 통해 Bcrypt 해시 암호화 알고리즘을 적용함으로써 회원에 대한 보안성을 높였습니다.',
                        'Spring Boot에 JWT 토큰 부분을 설정한 다음에 JWT 토큰 인증 방식으로 회원을 인증하도록 하여 서버에 부담을 덜하도록 했습니다.',
                        'JPQL에서 쿼리 N+1 문제 및 무분별한 트랜잭션에 의해 DB 성능 저하가 발생했는데 조회 전용 트랜잭션과 쓰기 전용 트랜잭션을 분별하고 지연 로딩을 설정하여 DB 성능을 끌어올렸습니다.',
                        '기능을 구현하다 보니 중복 코드가 종종 생겨서 코드 관리하기 힘든 점이 있었습니다. 그래서 중복 코드 제거, 각 엔터티에 Setter 사용을 자제하고 생성 메소드, 수정 메소드 등의 로직을 만들고 JPA에서 제공한 임배디드 엔터티를 생성해서 각 엔터티에 적용함으로써 유지보수성을 높였습니다.'
                    ],
                    source: 'https://github.com/seongchangkim/account-book',
                    domain: 'http://ec2-3-38-238-225.ap-northeast-2.compute.amazonaws.com:8080/login',
                    skillStack: 'Spring boots, Java, MySQL, Vite, Vue.js, JavaScript, npm, CSS3, HTML5, tailwindCSS, Flutter, Dart',
                    IDE: 'Intellij, Visual Studio Code'
                },
                // {
                //     name: '웹 드라이브 프로그램',
                //     img: 'web-cloud-program',
                //     datePeople:'2021.7.17~2023.09.08(50일)(1인 프로젝트)',
                //     content: '스프링 프레임워크를 독학하여 공부했던 내용을 바탕으로 Spring framework로 웹 드라이브 프로그램을 만들게 되었습니다. 그것을 만들면서 보안성을 높이기 위해 Spring Security를 적용했고 로그인, 로그아웃, 비밀번호 찾기, 아이디 찾기, 관리자 관련된 기능, 게시판 CRUD, 파일 업로드, 파일 다운로드, 웹 드라이브 휴지통 기능 등을 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/SpringFrameworkBootCloud1-SpringFramework.git',
                //     domain: '',
                //     skillStack: 'HTML5, CSS3, JavaScript, Bootstrap, jQuery, Java, JSP, MySQL, Spring Framework',                    
                //     IDE: 'Eclipse'
                // },
                // {
                //     name: '한 일 목록',
                //     img: 'toDoList',
                //     datePeople: '2022.01.27~2022.01.28(1인 프로젝트)',
                //     content: '순수 자바스크립트를 기반으로 만든 웹 프로젝트입니다. 한 일을 추가, 삭제를 가능하게 구현했고 시계 기능도 구현했습니다. 그리고 추가하고 싶은 한 일을 입력 안 하거나 같은 한 일을 입력하여 클릭 할 때 유효성 검사를 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/to-do-list',
                //     domain: 'https://seongchangkim.github.io/to-do-list/',
                //     skillStack: 'JavaScript, CSS3, HTML5',
                //     IDE: 'Visual Studio Code'
                // },
                // {
                //     name: '카드 게임',
                //     img: 'cardGame',
                //     datePeople: '2022.02.03~2022.02.07(1인 프로젝트)',
                //     content: '노마드 코더 ES6의 정석 강의를 통해 자바스크립트를 복습하여 만든 웹 게임 프로젝트입니다. 9개 카드 중 선택한 3개 카드가 같은 숫자이면 You\' re victory라는 알림창을 뜨는 것을 구현했고 그렇지 않을 경우에 Game Over!!라는 알림창을 뜨는 것을 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/CardGame-js',
                //     domain: 'https://seongchangkim.github.io/CardGame-js/',
                //     skillStack: 'JavaScript, CSS3, HTML5',
                //     IDE: 'Visual Studio Code'
                // },
                // {
                //     name: '코인 시세 분석 및 단위 변환할 수 있는 웹사이트',
                //     img: 'cointrackerconverter',
                //     datePeople: '2021.12.10~2021.12.12(1인 프로젝트)',
                //     content: 'react를 사용하여 그래프를 통해서 각 코인별로 시세 분석할 수 있고 단위 변환할 수 있는 기능을 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/Coin-Tracker-Converter-React',
                //     domain: 'https://seongchangkim.github.io/Coin-Tracker-Converter-React/',
                //     skillStack: 'React, JavaScript, npm, CSS3, HTML5, nivo',
                //     IDE: 'Visual Studio Code'
                // },
                // {
                //     name: '웹 계산기',
                //     img: 'calculator',
                //     datePeople: '2021.11.29~2021.12.01(1인 프로젝트)',
                //     content: '순수 자바스크립트를 기반으로 만든 웹 프로젝트입니다. 자바스크립트를 이해하는데 도움이 되었고 기본적인 사칙연산을 할 수 있고 웬만한 계산기처럼 구현했습니다. 그리고 잘못된 연산자를 입력 시 유효성 검사를 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/Calculator-js',
                //     domain: 'https://seongchangkim.github.io/Calculator-js/',
                //     skillStack: 'JavaScript, CSS3, HTML5',
                //     IDE: 'WebStrom'
                // },
                
            ],
            projects: "PROJECTS"
        }
    }
}