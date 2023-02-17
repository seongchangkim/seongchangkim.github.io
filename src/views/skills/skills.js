import skillsSubComponent from "@/components/skills/skillsSubComponent.vue";
import Title from "@/components/title/title.vue";

export default{
    data(){
        return{
            frontEndArr: [["html5", 0], ["css3", 0], ["js", 0], ["vuejs", 0], ["bootstrap", 0]],
            backEndArr: [["nodejs", 500]],
            rdbmsArr: [["mysql", 0]],
            IDEArr: [["vscode", 0]],
            appDevelopmentArr: [["flutter", 0]],
            versionControlArr: [["git", 0], ["github", 0]],
            certificateArr: [["certficate", 0]],
            skills: "SKILL STACK"
        }
    },
    components: {
        skillsSubComponent,
        Title
    },
}