var selectPlace = () => import("@/components/inner/menupage/select_place/index");
var delivery = () => import("@/components/inner/menupage/delivery/index");
var delivery_address = () => import("@/components/inner/menupage/delivery/address/index");
var menu_with_cart = () => import("@/components/inner/menupage/pickup/index");


// import orderPlaceRoutes from "@/components/inner/menupage/routes";
export default [
  {
    path: '',
    component: selectPlace,
  },
  {
    path: 'delivery',
    component: delivery,
    children : [
      {
        path : 'new',
        component : delivery_address
      }
    ]
  },
  {
    path: 'cart',
    component: menu_with_cart,
  },
]