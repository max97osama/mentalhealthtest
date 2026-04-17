module.exports = {
  apps: [
    {
      name: 'mht',
      script: 'node_modules/.bin/next',
      args: 'start -p 3001',
      cwd: '/home/max/mentalhealthtest',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
