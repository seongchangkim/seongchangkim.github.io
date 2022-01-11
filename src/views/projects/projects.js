import Title from "../../components/title/title.vue";

export default{
    components:{
        Title
    },
    data(){
        return{
            projectsInfo: [
                {
                    name: '웹 계산기',
                    img: 'calculator',
                    datePeople: '2021.11.29~2021.12.01(1인 프로젝트)',
                    content: '순수 자바스크립트를 기반으로 만든 웹 프로젝트입니다. 자바스크립트를 이해하는데 도움이 되었고 기본적인 사칙연산을 할 수 있고 웬만한 계산기처럼 구현했습니다. 그리고 잘못된 연산자를 입력 시 유효성 검사를 구현했습니다.',
                    source: 'https://github.com/seongchangkim/Calculator-js',
                    domain: 'https://seongchangkim.github.io/Calculator-js/',
                    frontEnd: 'JavaScript, CSS3, HTML5',
                    IDE: 'WebStrom'
                },
                {
                    name: '코인 시세 분석 및 단위 변환할 수 있는 웹사이트',
                    img: 'cointrackerconverter',
                    datePeople: '2021.12.10~2021.12.12(1인 프로젝트)',
                    content: 'react를 사용하여 그래프를 통해서 각 코인별로 시세 분석할 수 있고 단위 변환할 수 있는 기능을 구현했습니다.',
                    source: 'https://github.com/seongchangkim/Coin-Tracker-Converter-React',
                    domain: 'https://seongchangkim.github.io/Coin-Tracker-Converter-React/',
                    frontEnd: 'React, JavaScript, npm, CSS3, HTML5, nivo',
                    IDE: 'Visual Studio Code'
                },
                {
                    name: '나만의 포트폴리오',
                    img: 'portfolio',
                    datePeople: '2022.1.6~2021.1.10(1인 프로젝트)',
                    content: 'vue, bootstrap를 사용하여 저만의 포트폴리오를 만들었습니다. 그리고 저만의 포트폴리오에 반응형 웹을 구현했습니다.',
                    source: 'https://github.com/seongchangkim/seongchangkim.github.io',
                    domain: 'https://seongchangkim.github.io/',
                    frontEnd: 'Vue, JavaScript, npm, CSS3, HTML5, bootstrap',
                    IDE: 'Visual Studio Code'
                },
            ],
            projects: "PROJECTS"
        }
    }
}