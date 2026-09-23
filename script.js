const featuresGrid = document.querySelector('features-grid');


// About us -->
const featuresGridItems = [
    {
        icon: '<i class="fas fa-map-marked-alt"></i>',
        title: 'Payed Guidance',
        subTitle: 'Benefit from our team`s expertise and receive a smooth buying experience.'
    },

    {
        icon: '<i class="fas fa-tags"></i>',
        title: 'Discounted Custom',
        subTitle: 'We craft deals to fit your budget securely and give you big discounts.'
    },

    {
        icon: '<i class="fas fa-clipboard-check"></i>',
        title: 'Transparent Process',
        subTitle: 'Stay informed with our clear and honest approach in helping you choose.'
    },

    {
        icon: '<i class="fas fa-handshake"></i>',
        title: 'Exceptional Support',
        subTitle: 'Have peace of mind with our responsive customer support team.'
    }
];

featuresGridItems.forEach(item => {
    featuresGrid.innerHTML += `
    <div class="features-card">
    <div class="icon-wrapper">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.subTitle}</p>
    </div>
    `
});