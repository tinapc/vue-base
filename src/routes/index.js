import Profile from '../components/Profile';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';

export const routes = [
  { path: '/profile/:id', component: Profile },
  { path: '/', component: Home },
  { path: '/about-me', component: AboutMe },
];
