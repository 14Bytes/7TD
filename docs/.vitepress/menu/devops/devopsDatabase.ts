// write your menu in here
const devopsDatabaseMenu = [
  {
    text: 'Overview',
    collapsed: true,
    items: [
      {
        text: '备忘录',
        link: '/devops/database/memo',
      },
      {
        text: '文档核对记录（运维）',
        link: '/devops/database/checkdoc-for-ops',
      },
    ],
  },
  {
    text: 'Mysql安装及配置',
    collapsed: true,
    items: [
      {
        text: '安装Mysql8.0',
        link: '/devops/database/mysql/install-mysql8.0',
      },
      {
        text: 'Mysql8.0系统变量说明',
        link: '/devops/database/mysql/system-variable-for-mysql8.0',
      },
      {
        text: 'Mysql8.0备份与恢复',
        link: '/devops/database/mysql/backup-mysql8.0',
      },
    ],
  },
  {
    text: 'Mysql集群',
    collapsed: true,
    items: [
      {
        text: '双主双从集群',
        link: '/devops/database/mysql/mmss',
      },
      {
        text: 'MySQL组复制集群',
        link: '/devops/database/mysql/mgr',
      },
    ],
  },
  {
    text: 'Mysql数据备份及恢复',
    collapsed: true,
    items: [
      {
        text: 'XtraBackup',
        link: '/devops/database/mysql/xtraBackup',
      },
    ],
  },
  {
    text: 'MongoDB',
    collapsed: true,
    items: [
      {
        text: '安装MongoDB4.4',
        link: '/devops/database/mongodb/install-mongodb-4.4',
      },
      {
        text: '安装MongoDB6.0',
        link: '/devops/database/mongodb/install-mongodb-6.0',
      },
    ],
  },
]

export default devopsDatabaseMenu
