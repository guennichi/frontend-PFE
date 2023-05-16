import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Components',
    title: true,
  },
  {
    name: 'User',
    url: '/user',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add user',
        url: '/user/add',
      },
      {
        name: 'List user',
        url: '/user/list',
      },
    ],
  },

  {
    name: 'Profil',
    url: '/profil',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-user' },
  },
];
