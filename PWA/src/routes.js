/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {
  lazy
} from 'react';

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: lazy(() => import('views/Auth/DashboardView')),
    layout: "/auth"
  },
  {
    path: "/Users",
    name: "Users",
    icon: "pe-7s-user",
    component: lazy(() => import('views/Auth/UsersView')),
    layout: "/auth"
  },
  {
    path: "/Login",
    name: "Login",
    icon: "",
    component: lazy(() => import('views/Public/LoginView')),
    layout: "/public"
  },
  {
    path: "/Register",
    name: "Register",
    icon: "",
    component: lazy(() => import('views/Public/RegisterView')),
    layout: "/public"
  },
  {
    path: "/PrivacyPolicy",
    name: "Privacy Policy",
    icon: "",
    component: lazy(() => import('views/Public/PrivacyPolicyView')),
    layout: "/public"
  },
  {
    path: "/TermsOfUse",
    name: "Terms of Use",
    icon: "",
    component: lazy(() => import('views/Public/TermsOfUseView')),
    layout: "/public"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: lazy(() => import('views/Dashboard')),
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: lazy(() => import('views/UserProfile')),
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: lazy(() => import('views/TableList')),
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: lazy(() => import('views/Typography')),
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: lazy(() => import('views/Icons')),
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: lazy(() => import('views/Maps')),
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: lazy(() => import('views/Notifications')),
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: lazy(() => import('views/Upgrade')),
    layout: "/admin"
  }
];

export default routes;
