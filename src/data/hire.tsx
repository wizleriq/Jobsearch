import { Post } from "../types/post";
import Settingone from '../images/Settingone.png'
import Settingtwo from '../images/Settingtwo.png'
import Settingthree from '../images/Settingthree.png'
import Settingfour from '../images/Settingfour.png'

const posts: Post[] = [
  {
    id: 1,
    picture: Settingone,
    heading: "Unmatched industry expertise",
    text: "With years of experience in hiring, we connect businesses with the right leaders to grow."
  },
  {
    id: 2,
    picture: Settingtwo,
    heading: "Commitment to excellence ",
    text: "We excel at connecting top talent with the right opportunities, ensuring success for everyone."
  },
  {
    id: 3,
    picture: Settingthree,
    heading: "results-Driven approach",
    text: "We tailor hiring solutions to connect the right people with the right jobs.."
  },
  {
    id: 4,
    picture: Settingfour,
    heading: "Unmatched industry expertise",
    text: "Diverse talent, ensuring the right people find the right opportunities to grow."
  }
];

export default posts;
