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
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add user',
        url: '/pages/user/addUser',
      },
      {
        name: 'Users list',
        url: '/pages/user',
      },
    ],
  },
  {
    name: '  Pays',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add pays',
        url: '/pages/pays/addPays',
      },
      {
        name: 'List pays',
        url: '/pages/pays/ListPays',
      },
    ],
  },
  {
    name: 'Local',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add local',
        url: '/pages/local/addLocal',
      },
      {
        name: 'List local',
        url: '/pages/local/Listlocal',
      },
    ],
  },
  {
    name: 'Responsable',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Responsable',
        url: '/pages/responsable/addResponsable',
      },
      {
        name: 'List Responsable',
        url: '/pages/responsable/listResponsable',
      },
    ],
  },

  {
    name: 'Migration',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'A propos de migration',
        url: '/charts',
      },
      {
        name: 'Migration data file',
        url: 'pages/file/listfile',
      },
    ],
  },
];
