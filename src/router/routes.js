import MyLogin from '../pages/MyLogin'
const routes = [
    {
        path:'/',
        name:'login',
        component:MyLogin
    },
    {
        path:'/Content',
        name:'content',
        component:()=>import('../pages/MyContent')
    }

]

export default routes 