import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'withdraw-apply-list',
    label: {
      zh_CN: '提现申请列表',
    },
    path: '/withdraw-apply-list',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
