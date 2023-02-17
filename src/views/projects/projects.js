import Title from "@/components/title/title.vue";

export default{
    components:{
        Title
    },
    data(){
        return{
            projectsInfo: [
                // {
                //     name: '웹 계산기',
                //     img: 'calculator',
                //     datePeople: '2021.11.29~2021.12.01(1인 프로젝트)',
                //     content: '순수 자바스크립트를 기반으로 만든 웹 프로젝트입니다. 자바스크립트를 이해하는데 도움이 되었고 기본적인 사칙연산을 할 수 있고 웬만한 계산기처럼 구현했습니다. 그리고 잘못된 연산자를 입력 시 유효성 검사를 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/Calculator-js',
                //     domain: 'https://seongchangkim.github.io/Calculator-js/',
                //     frontEnd: 'JavaScript, CSS3, HTML5',
                //     IDE: 'WebStrom'
                // },
                // {
                //     name: '코인 시세 분석 및 단위 변환할 수 있는 웹사이트',
                //     img: 'cointrackerconverter',
                //     datePeople: '2021.12.10~2021.12.12(1인 프로젝트)',
                //     content: 'react를 사용하여 그래프를 통해서 각 코인별로 시세 분석할 수 있고 단위 변환할 수 있는 기능을 구현했습니다.',
                //     source: 'https://github.com/seongchangkim/Coin-Tracker-Converter-React',
                //     domain: 'https://seongchangkim.github.io/Coin-Tracker-Converter-React/',
                //     frontEnd: 'React, JavaScript, npm, CSS3, HTML5, nivo',
                //     IDE: 'Visual Studio Code'
                // },
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
                    name: '주식 포트폴리오 관리 앱',
                    img: 'stockprod',
                    datePeople:'2022.1.5~2023.02.17(1인 프로젝트)',
                    content: 'Flutter가 다른 앱 네이티브 프로그래밍 언어보다 단기간에 Android과 IOS 둘 다 개발할 수 있어서 주식 포트폴리오 앱 애플리케이션을 만들게 되었습니다. 기능은 회원, 자산 포트폴리오 두 가지로 나누어서 구현했는데 회원에 대한 기능은 로그인, 로그아웃, 회원가입 기능은 백엔드 api 호출하여 구현했고 자산 포트폴리오에 대한 기능은 CRUD(생성, 목록 및 상세 보기, 수정, 삭제) 기능을 백엔드 api 호출하여 구현했습니다.',
                    source: 'https://github.com/seongchangkim/stock_app',
                    domain: '',
                    skillStack: 'Flutter',
                    IDE: 'Visual Studio Code'
                },
                {
                    name: '주식 포트폴리오 서버',
                    img: 'stockprod',
                    datePeople:'2022.12.18~2023.02.14(1인 프로젝트)',
                    content: '인프런에서 Node.js 인강을 완강하고 백엔드 포트폴리오를 만들고 싶고 다른 백엔드 프로그래밍 언어보다 백엔드에서 공통적으로 제공하는 기능들을 쉽게 설정할 수 있어서  만들게 되었습니다. RDBMS 데이터베이스를 쉽게 연동할 수 있는 Sequelize 라이브러리를 써서 적용했고, 회원에 대한 기능에 유용한 JWT 그리고 Bcrypt 라이브러리를 적용했습니다. 왜나하면 로그인할 시 토큰으로 로그인 여부를 확인할 수 있고 bcrypt를 이용하여 비밀번호를 암호화해서 보안성이 좋아지기 때문입니다. 그리고 실제 서버를 호스팅 하고 싶어서 AWS EC2으로 Node.js 서버를 배포했습니다.',
                    source: 'https://github.com/seongchangkim/stock_server',
                    domain: '',
                    skillStack: 'Node.js, Exprees.js, AWS',
                    IDE: 'Visual Studio Code'
                },
                {
                    name: '나만의 포트폴리오',
                    img: 'portfolio',
                    datePeople: '2022.1.6~2021.1.10(1인 프로젝트), 2023.2.16~2023.2.17(2차 포트폴리오 작업)',
                    content: 'vue, bootstrap를 사용하여 저만의 포트폴리오를 만들었습니다. 그리고 저만의 포트폴리오에 반응형 웹을 구현했습니다.',
                    source: 'https://github.com/seongchangkim/seongchangkim.github.io',
                    domain: 'https://seongchangkim.github.io/',
                    skillStack:  'Vue, JavaScript, npm, CSS3, HTML5, bootstrap',
                    IDE: 'Visual Studio Code'
                },
            ],
            projects: "PROJECTS"
        }
    }
}