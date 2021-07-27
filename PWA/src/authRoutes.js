import {
  lazy
} from 'react';
import {
  basicRole,
  adminRole,
  systemAdminRole
} from 'components/Domains/Roles';

const basicRoleUp = {
  systemAdminRole,
  adminRole,
  basicRole
};
const adminRoleUp = {
  systemAdminRole,
  adminRole
};
const adminRoleOnly = {
  adminRole
};
const systemAdminRoleOnly = {
  systemAdminRole
};
const authRoutes = [
  {
    layout: '/auth',
    path: '/Dashboard',
    name: 'Dashboard',
    component: lazy(async () => await import('views/Auth/AuthDashboardView')),
    exact: true,
    iconLibrary: 'now-ui-icons',
    icon: 'design_app',
    roles: basicRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Profile',
    name: 'Profile',
    component: lazy(async () => await import('views/Auth/AuthUserView')),
    exact: true,
    iconLibrary: null,
    icon: null,
    roles: basicRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: true
  },
  {
    layout: '/auth',
    path: '/Settings',
    name: 'Settings',
    component: lazy(async () => await import('views/Auth/AuthSettingsView')),
    exact: true,
    iconLibrary: 'now-ui-icons',
    icon: 'ui-1_settings-gear-63',
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Wananga',
    name: 'Wananga/Events',
    component: lazy(async () => await import('views/Auth/AuthEventsView')),
    exact: true,
    iconLibrary: 'now-ui-icons',
    icon: 'ui-1_calendar-60',
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Wananga/:evid',
    name: 'Wananga/Event',
    component: lazy(async () => await import('views/Auth/AuthEventView')),
    exact: true,
    iconLibrary: null,
    icon: null,
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: true
  },
  {
    layout: '/auth',
    path: '/Resources',
    name: 'Resources',
    component: lazy(async () => await import('views/Auth/AuthResourcesView')),
    exact: true,
    iconLibrary: 'now-ui-icons',
    icon: 'ui-2_favourite-28',
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Resources/:rid',
    name: 'Resource',
    component: lazy(async () => await import('views/Auth/AuthResourceView')),
    exact: true,
    iconLibrary: null,
    icon: null,
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: true
  },
  {
    layout: '/auth',
    path: '/Contacts',
    name: 'Contact Messages',
    component: lazy(async () => await import('views/Auth/AuthContactsView')),
    exact: true,
    iconLibrary: 'now-ui-icons',
    icon: 'ui-1_email-85',
    roles: basicRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Contacts/:cid',
    name: 'Contact Message',
    component: lazy(async () => await import('views/Auth/AuthContactView')),
    exact: true,
    iconLibrary: null,
    icon: null,
    roles: basicRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: true
  },
  {
    layout: '/auth',
    path: '/Users',
    name: 'Users',
    component: lazy(async () => await import('views/Auth/AuthUsersView')),
    exact: true,
    iconLibrary: 'fas',
    icon: 'fa-users',
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: false
  },
  {
    layout: '/auth',
    path: '/Users/:uid',
    name: 'User',
    component: lazy(async () => await import('views/Auth/AuthUserView')),
    exact: true,
    iconLibrary: null,
    icon: null,
    roles: adminRoleUp,
    excludeFromAuthenticatedRoutes: false,
    excludeFromSidebar: true
  }
];
const getAuthRouteByName = name => {
  return authRoutes.find(ar => ar.name === name);
};

export default authRoutes;
export {
  basicRoleUp,
  adminRoleUp,
  adminRoleOnly,
  systemAdminRoleOnly,
  getAuthRouteByName
};
