// write your menu in here

const devopsBasicMenu = [
  {
    text: 'Overview',
    collapsed: true,
    items: [
      {
        text: '🍬 技术栈',
        link: '/devops/basic/awesome',
      },
      {
        text: '📓 常用命令',
        link: '/devops/basic/linux-command',
      },
      {
        text: '📝 备忘录',
        link: '/devops/basic/memo',
      },
      {
        text: '📕 文档核对记录',
        link: '/devops/basic/checkdoc',
      },
    ],
  },
  {
    text: 'Centos & OpenEuler',
    collapsed: true,
    items: [
      {
        text: '系统初始操作',
        link: '/devops/basic/server-os/initialization',
      },
      {
        text: '系统优化',
        link: '/devops/basic/server-os/optimization',
      },
      {
        text: '升级OpenSSL',
        link: '/devops/basic/server-os/upgrade-openssl',
      },
      {
        text: '升级OpenSSH',
        link: '/devops/basic/server-os/upgrade-openssh',
      },
      {
        text: 'Systemd Daemon',
        link: '/devops/basic/server-os/systemd',
      },
      {
        text: 'Cockpit 📄',
        link: '/devops/basic/server-os/cockpit',
      },
      {
        text: 'Alternatives 📄',
        link: '/devops/basic/server-os/alternatives',
      },
    ],
  },
  {
    text: 'Nginx',
    collapsed: true,
    items: [
      {
        text: '安装Nginx',
        link: '/devops/basic/nginx/install',
      },
      {
        text: 'Nginx核心指令说明',
        link: '/devops/basic/nginx/configuration',
      },
      {
        text: 'Location块说明及示例',
        link: '/devops/basic/nginx/location-example',
      },
      {
        text: '负载均衡配置说明',
        link: '/devops/basic/nginx/upstream',
      },
      {
        text: '基于KeepAlived的高可用',
        link: '/devops/basic/nginx/ha-with-keepalived',
      },
      {
        text: '集成PHP-FPM',
        link: '/devops/basic/nginx/integration-php-fpm',
      },
      {
        text: 'Nginx平滑升级 📄',
        link: '/devops/basic/nginx/smooth-upgrades',
      },
      {
        text: '缓存配置说明 📄',
        link: '/devops/basic/nginx/cache',
      },
      {
        text: 'Nginx日志统计分析 📄',
        link: '/devops/basic/nginx/log-stats-analysis',
      },
      {
        text: '动态添加模块 📄',
        link: '/devops/basic/nginx/add-dynamic-module',
      },
    ],
  },
  {
    text: 'Java',
    collapsed: true,
    items: [
      {
        text: 'Java介绍',
        link: '/devops/basic/java/introduction',
      },
      {
        text: 'JDK安装',
        link: '/devops/basic/java/install-jdk',
      },
      {
        text: 'Maven安装及配置',
        link: '/devops/basic/java/maven',
      },
    ],
  },
  {
    text: 'NodeJS',
    collapsed: true,
    items: [
      {
        text: '安装NodeJS',
        link: '/devops/basic/nodejs/install-nodejs',
      },
    ],
  },
  {
    text: 'PHP7',
    collapsed: true,
    items: [
      {
        text: 'PHP7介绍',
        link: '/devops/basic/php7/introduction',
      },
      {
        text: '安装PHP7.3',
        link: '/devops/basic/php7/install-php73',
      },
      {
        text: '安装PHP7.3扩展包',
        link: '/devops/basic/php7/install-php-expansion',
      },
      {
        text: '安装PHP7.4',
        link: '/devops/basic/php7/install-php74',
      },
      {
        text: 'Composer安装',
        link: '/devops/basic/php7/composer',
      },
      {
        text: 'php.ini配置说明',
        link: '/devops/basic/php7/php-ini',
      },
      {
        text: 'php-fpm配置说明',
        link: '/devops/basic/php7/php-fpm',
      },
    ],
  },
  {
    text: 'Python',
    collapsed: true,
    items: [
      {
        text: '在Centos7上安装Python3',
        link: '/devops/basic/python/install-python3-on-centos7',
      },
      {
        text: '在openEuler上安装Python2',
        link: '/devops/basic/python/install-python2-on-openeuler',
      },
    ],
  },
]

export default devopsBasicMenu
