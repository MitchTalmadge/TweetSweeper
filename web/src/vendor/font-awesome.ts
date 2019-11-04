import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function init() {
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    library.add(faGithub);
}


