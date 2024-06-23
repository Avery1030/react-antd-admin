import type { Role } from '@/interface/permission/role.interface';

import { intercepter, mock } from '../config';

const roles: Role[] = [
  {
    name: {
      zh_CN: '访客',
    },
    code: 'role_guest',
    id: 0,
    status: 'enabled',
  },
  {
    name: {
      zh_CN: '管理员',
    },
    code: 'role_admin',
    id: 1,
    status: 'enabled',
  },
];

mock.mock('/permission/role', 'get', intercepter(roles));
