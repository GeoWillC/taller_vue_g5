import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/registrar',
        component: () => import('../page/PaginaRegistro')
    },
    {
        path:'/seccion',
        component:()=>import('../page/PaginaSeccion')
    },
    {
        path:'/departamento',
        component:()=>import('../page/PaginaDepartamento')
    },
    {
        path:'/factura',
        component:()=>import('../page/PaginaFactura')
    },
    {
        path:'/:patMatch(.*)*',
        component:()=>import('../page/NoFoundPage')
    }    
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router