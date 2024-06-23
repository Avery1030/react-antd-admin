import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Dashboard',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'withdraw-apply-list',
    label: {
      zh_CN: '提现申请列表',
      en_US: 'Withdraw Apply List',
    },
    // icon: 'profile',
    path: '/withdraw-apply-list',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
