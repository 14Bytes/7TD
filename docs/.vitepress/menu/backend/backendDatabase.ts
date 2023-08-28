// write your menu in here
const backendDatabaseMenu = [
  {
    text: 'Overview',
    collapsed: true,
    items: [
      {
        text: '文档核对记录（开发）',
        link: '/backend/database/checkdoc-for-dev',
      },
    ],
  },
  {
    text: 'Mysql设计规范',
    collapsed: true,
    items: [
      {
        text: '基本设计规范',
        link: '/backend/database/mysql/basic-specification',
      },
      {
        text: '库表规约',
        link: '/backend/database/mysql/db-table-specification',
      },
      {
        text: 'SQL 开发规范',
        link: '/backend/database/mysql/sql-develop-specification',
      },
      {
        text: 'DDL 常用示例',
        link: '/backend/database/mysql/data-definition-language',
      },
    ],
  },
]

export default backendDatabaseMenu
