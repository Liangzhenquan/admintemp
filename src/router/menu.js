const menus = [
  {
    title: '首页',
    key: '/item4',
    icon: 'home'
  },
  {
    title: 'item',
    key: '/item',
    icon: 'home',
    sub: [
      {
        title: 'item1',
        key: '/item1'
      },
      {
        title: 'item2',
        key: '/item2'
      }
    ]
  },
  {
    title: '测试',
    key: '/test',
    sub: [
      {
        title: '测试1',
        key: '/item3'
      }
    ]
  }
];
export default menus;
