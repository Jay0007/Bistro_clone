var orderPlace = () => import("@/components/inner/menupage/index")
import orderPlaceRoutes from "@/components/inner/menupage/routes"

var home = () => import("./homepage/index.vue");
// import supervisorRoutes from '@/components/inner/supervisor/routes'
// import companyRoutes from "@/components/inner/company/routes";
export default [
  {
    path: "",
    component: home
  },
  {
    path: 'order',
    component: orderPlace,
    children: [...orderPlaceRoutes]
  }
];

// var supervisor = () => import('@/components/inner/supervisor')
// var company = () => import("@/components/inner/company/index");

// export default [
// {
//   path: '/app/agent',
//   name: 'agent',
//   component: agent,
//   children: [...agentRoutes]
// },
// {
//   path: '/app/supervisor',
//   name: 'supervisor',
//   component: supervisor,
//   children: [...supervisorRoutes]
// },
// {
//   path: "/app/company",
//   name: "company",
//   component: company,
//   children: [...companyRoutes]
// }
// ]
