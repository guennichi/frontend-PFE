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
        name: 'Add responable',
        url: '/pages/responsable/addResponsable',
      },
      {
        name: 'List Superviseur',
        url: '/pages/superviseur/ListSuperviseur',
      },
      {
        name: 'List responsable local',
        url: '/pages/responsable/listResponsable',
      },
    ],
  },
  {
    name: ' Add Pays',
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
    name: 'Migration',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Migration',
        url: '',
      },
      {
        name: 'List Migration',
        url: '',
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
