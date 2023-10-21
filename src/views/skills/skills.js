import skillsSubComponent from "@/components/skills/skillsSubComponent.vue";
import Title from "@/components/title/title.vue";

export default{
    data(){
        return{
            backEndArr: [["nodejs", 0, 0], ["springBoot", 0, 0],["nestjs", 0, 0]],
            rdbmsArr: [["mysql", 0, 0]],
            versionControlArr: [["git", 0, 0], ["github", 0, 0]],
            IDEArr: [["vscode", 0, 0], ["webstrom", 0, 0], ["IntelliJ-IDEA", 350, 0]],
            frontEndArr: [["html5", 0, 0], ["css3", 0, 0], ["js", 0, 0], ["vuejs", 0, 0], ["reactjs", 0, 0],["bootstrap", 0, 0], ["tailwindcss", 450, 100], ["Nextjs", 400, 100]],
            appDevelopmentArr: [["flutter", 0, 0]],
            certificateArr: [["certficate", 0, 0]],
            skills: "SKILL STACK"
        }
    },
    components: {
        skillsSubComponent,
        Title
    },
}