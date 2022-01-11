import skillsSubComponent from "../../components/skills/skillsSubComponent.vue";
import Title from "../../components/title/title.vue";

export default{
    data(){
        return{
            frontEndArr: ["html5", "css3","js", "vuejs", "reactjs","bootstrap"],
            IDEArr: ["vscode","webstrom"],
            versionControlArr: ["git", "github"],
            certificateArr: ["certficate"],
            skills:"SKILLS"
        }
    },
    components: {
        skillsSubComponent,
        Title
    },
}