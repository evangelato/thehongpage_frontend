import { combineReducers } from 'redux';
import Sidebar from './sidebarReducer';
import Home from './homeReducer';
import AboutMe from './aboutMeReducer';
import WorkExperience from './workExperienceReducer';
import Education from './educationReducer';
import Project from './projectReducer';
import Skill from './skillReducer';
import Hobby from './hobbyReducer';
import Loading from './loadingReducer';

const rootReducer = combineReducers({
    Sidebar,
    Home,
    AboutMe,
    WorkExperience,
    Education,
    Project,
    Skill,
    Hobby,
    Loading,
});

export default rootReducer;
