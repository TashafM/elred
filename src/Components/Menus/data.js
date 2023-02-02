import { faTableColumns, faCube, faCubes, faUserTimes, faHandshake, faTrophy, faMessage, faMoneyBills } from '@fortawesome/free-solid-svg-icons'


const menuItems = [
    {
        id: 1,
        icon: faTableColumns,
        title: "Dashboard",
        path: '/'
    },
    {
        id: 2,
        icon: faCube,
        title: "Orders",
        path: '/orders'
    },
    {
        id: 3,
        icon: faUserTimes,
        title: "Team Members",
        path:'/team-members'
    },
    {
        id: 4,
        icon: faHandshake,
        title: "Partners",
        path: '/partners'
    },
    {
        id: 5,
        icon: faCubes,
        title: "Product Listings",
        path:'/product-listings'
    },
    {
        id: 6,
        icon: faTrophy,
        title: "Awards & Honours",
        path: '/awards-honours'
    },
    {
        id: 7,
        icon: faMessage,
        title: "About Us",
        path: '/about-us'
    },
    {
        id: 8,
        icon: faMoneyBills,
        title: "Payment Info",
        path: '/payment-info'
    },
]

export default menuItems