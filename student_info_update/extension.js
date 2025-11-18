module.exports = {
    name: 'StudentInfoUpdate',
    publisher: 'Sample',
    cards: [{
        type: 'StudentInfoUpdateCard',
        source: './src/cards/StudentInfoUpdateCard',
        title: 'StudentInfoUpdate Card',
        displayCardType: 'StudentInfoUpdate Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        configuration: {
        server: [
          {
            key: "apiKey",
            label: "API Key",
            type: "password",
            required: true,
          },
        ],
      },
    }],
    page: {
        source: './src/page/router.jsx'
    }
};