const Profile = () => import('../components/Profile');
const Home = () => import('../components/Home');

export const routes = [
  { path: '*' },
  { path: '/', component: Home },
  { path: '/profile/:id', component: Profile },
];
