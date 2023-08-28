// write your menu in here
const monitoringMenu = [
  {
    text: '汇总',
    collapsed: true,
    items: [
      {
        text: '监控指标',
        link: '/devops/monitoring/monitorkeys',
      },
      {
        text: '备忘录',
        link: '/devops/monitoring/memo',
      },
    ],
  },
  {
    text: 'Prometheus',
    collapsed: true,
    items: [
      {
        text: 'prometheus安装',
        link: '/devops/monitoring/prometheus/install',
      },
    ],
  },
  {
    text: 'Skywalking',
    collapsed: true,
    items: [
      {
        text: 'Skywalking安装',
        link: '/devops/monitoring/Skywalking/install',
      },
    ],
  },
  {
    text: 'Zabbix',
    collapsed: true,
    items: [
      {
        text: '快速入门指南',
        link: '/devops/monitoring/zabbix/quickstart',
      },
      {
        text: 'Zabbix6.4 Server安装及配置',
        link: '/devops/monitoring/zabbix/install-zabbix64-server',
      },
      {
        text: 'Zabbix5.4 Agent安装',
        link: '/devops/monitoring/zabbix/install-zabbix54-agent',
      },
      {
        text: 'Zabbix5.4 Proxy安装',
        link: '/devops/monitoring/zabbix/install-zabbix54-proxy',
      },
    ],
  },
]

export default monitoringMenu
