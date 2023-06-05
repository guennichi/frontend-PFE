import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'MIGRATION DATA',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },

  },
  {
    name: 'Components',
    title: true,
  },
  {
    name: 'Superviseurs',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Superviseur',
        url: '/pages/user/addUser',
      },
      {
        name: 'Superviseur list',
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
        name: 'Migration data file',
        url: 'pages/file/listfile',
      },
      {
        name: 'Statistics',
        url: '/charts',
      },
    ],
  },
];
