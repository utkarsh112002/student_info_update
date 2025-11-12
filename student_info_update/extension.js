module.exports = {
    name: 'StudentInfoUpdate',
    publisher: 'Sample',
    cards: [{
        type: 'StudentInfoUpdateCard',
        source: './src/cards/StudentInfoUpdateCard',
        title: 'StudentInfoUpdate Card',
        displayCardType: 'StudentInfoUpdate Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};