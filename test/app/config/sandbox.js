module.exports = {
  plugins: {
    appHarekeeper: {
      contextPath: '/harekeeper',
      recycler: {
        reportAPI: {
          uri: process.env.OPFLOW_LAB_URI || 'amqp://localhost',
          subscriberName: 'app-harekeeper-subscriber',
          recyclebinName: 'app-harekeeper-recyclebin',
          applicationId: 'appHarekeeperLab'
        }
      }
    },
    appWebweaver: {
      defaultRedirectUrl: '/index'
    }
  }
};
