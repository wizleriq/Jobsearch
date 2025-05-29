import { Testimonial } from "../types/testimonial";
import Quotation from '../images/Quotation.png'
import Dave from '../images/Dave.png'
import Femi from '../images/Femi.png'
import Amanda from '../images/Amanda.png'

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Working with Urgent! Hire Jobs was a game-changer for our hiring process. Their team took the time to understand our needs and delivered highly qualified candidates.",
        symbol: Quotation,
        name:"Dave Nelyson",
        picture: Dave,
    },
    {
        id: 2,
        text: "My experience with Urgent! Hire Jobs was outstanding. From the initial conversation to securing my new role, their team provided exceptional guidance, support, and professionalism.",
        symbol: Quotation,
        name: "Femi Adenuga",
        picture: Femi,
    },
    {
        id: 3,
        text: "Thanks to their expertise, I found a position that aligns perfectly with my professional goals and personal aspirations. The entire process was smooth, and incredibly supportive. ",
        symbol: Quotation,
        name: "Amanda David",
        picture: Amanda,
    },

]

export default testimonials