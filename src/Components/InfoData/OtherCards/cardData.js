import { faTableColumns,faGlobe, faMap, faClock, faLink, faQuoteLeft,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cardData = [
    {
        title: "Address",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatem.",
        icon: faMap,
    },
    {
        title: "Hours of Operations",
        desc: "Monday to Friday - 09:00 am To 06:00 am",
        icon: faClock,
    },
    {
        title: "Social Media & Links",
        desc: "",
        icon: faLink,
        icons:[
            {
                img: faGlobe,
                text: "Website",
            },
            {
                img: faInstagram,
                text: "Instagram",
            },
            {
                img: faFacebook,
                text: "Facebook",
            },
            {
                img: faTwitter,
                text: "Twitter",
            }
        ]
    },
    {
        title: "Statement",
        desc: "You think it, We ink it",
        icon: faQuoteLeft,
    },
]


export default cardData;