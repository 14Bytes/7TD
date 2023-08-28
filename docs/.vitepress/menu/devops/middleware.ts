// write your menu in here
const middlewareMenu = [
  {
    text: '汇总',
    collapsed: true,
    items: [
      {
        text: '备忘录',
        link: '/devops/middleware/memo',
      },
      {
        text: '文档核对记录（运维）',
        link: '/devops/middleware/checkdoc-for-ops',
      },
      {
        text: '文档核对记录（开发）',
        link: '/devops/middleware/checkdoc-for-dev',
      },
    ],
  },
  {
    text: 'Redis',
    collapsed: true,
    items: [
      {
        text: 'Redis 部署（单实例）',
        link: '/devops/middleware/redis/install',
      },
      {
        text: 'Redis 部署（Cluster 集群） 📄',
        link: '/devops/middleware/redis/cluster-install',
      },
      {
        text: 'Redis 开发规范',
        link: '/devops/middleware/redis/developing-guideline',
      },
    ],
  },
  {
    text: 'RabbitMQ',
    collapsed: true,
    items: [
      {
        text: 'RabbitMQ介绍',
        link: '/devops/middleware/rabbitmq/introduction',
      },
      {
        text: '单实例安装',
        link: '/devops/middleware/rabbitmq/install.md',
      },
      {
        text: '镜像队列的搭建及配置 📄',
        link: '/devops/middleware/rabbitmq/mirror-queues',
      },
      {
        text: '仲裁队列的搭建及配置 📄',
        link: '/devops/middleware/rabbitmq/quorum-queues',
      },
      {
        text: 'RabbitMQ开发规约 📄',
        link: '/devops/middleware/rabbitmq/developing-guideline',
      },
    ],
  },
  {
    text: 'Elastic',
    collapsed: true,
    items: [
      {
        text: 'Elasticsearch单实例部署 📄',
        link: '/devops/middleware/elastic/install-es',
      },
      {
        text: 'Kibana部署 📄',
        link: '/devops/middleware/elastic/install-kibana',
      },
    ],
  },
  {
    text: 'MinIO',
    collapsed: true,
    items: [
      {
        text: 'MinIO单机部署 📄',
        link: '/devops/middleware/minio/install',
      },
      {
        text: 'MinIO集群部署 📄',
        link: '/devops/middleware/minio/cluster-install',
      },
    ],
  },
  {
    text: 'Nacos',
    collapsed: true,
    items: [
      {
        text: 'Nacos部署（单机模式） 📄',
        link: '/devops/middleware/nacos/install',
      },
      {
        text: 'Nacos部署（集群模式） 📄',
        link: '/devops/middleware/nacos/cluster-install',
      },
      {
        text: 'Nacos配置说明 📄',
        link: '/devops/middleware/nacos/configuration',
      },
    ],
  },
  {
    text: 'HaProxy',
    collapsed: true,
    items: [],
  },
  {
    text: 'Keepalived',
    collapsed: true,
    items: [
      {
        text: 'Keepalived介绍',
        link: '/devops/middleware/keepalived/introduction',
      },
      {
        text: 'Keepalived安装',
        link: '/devops/middleware/keepalived/install',
      },
    ],
  },
  {
    text: 'Supervisor',
    collapsed: true,
    items: [
      {
        text: 'Supervisor 安装',
        link: '/devops/middleware/supervisor/install',
      },
      {
        text: '应用程序配置',
        link: '/devops/middleware/supervisor/program-settings',
      },
      {
        text: 'Supervisord Monitoring 📄',
        link: '/devops/middleware/supervisor/supervisor-monitor',
      },
    ],
  },
]

export default middlewareMenu
