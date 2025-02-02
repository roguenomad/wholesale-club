import amgen from './amgen-trans.png'
import astrazeneca from './astrazeneca-trans.png'
import bayer from './bayer-trans.png'
import enbrel from './enbrel.png'
import faq from './faq_rm.png'
import faq_arrow from './faq_arrow_rm.png'
import faq_pic_1 from './faq_pic_1_rm.png'
import faq_pic_2 from './faq_pic_2_rm.png'
import faq_pic_3 from './faq_pic_3_rm.png'
import faq_pic_4 from './faq_pic_4_rm.png'
import johnson from './jo&jo.png'
import merck from './merck-trans.png'
import moderna from './moderna.png'
import monjaro from "./monjaro.png"
import mounj from './mounj-logo.png'
import nova from './nova.png'
import pfizer from './pfizer-trans.png'
import pharma from './pharma.png'
import pharPart from './pharma-partners.png'
import rinvoq from './rinvoq.png'
import rin_1 from './rin_1.png'
import sinovac from './sinovac.png'
import scherPlo from './schering-plough.png'
import victoza from './victoza.png'
import vic1 from './vic-1.png'
import vic2 from './vict-2.png'
import vic3 from './vict-3.png'
import wegovy from './wegovy.png'
import logo from "./logo.png"
import shoppingCart from './shopping-cart-icon.png'
import mainImage from './main-image.jpg'
import profile from './profile-icon.png'
import menuResp from './menu-resp.png'
import backArrow from './back-arrow.png'
import delivery from './delivery-icon.png'
import reliability from './reliability-icon.png'
import safety from './safety-icon.png'
import infoImage from './male-pharm.png'

export const assets = {
    amgen,
    astrazeneca,
    bayer,
    enbrel,
    faq,
    faq_arrow,
    faq_pic_1,
    faq_pic_2,
    faq_pic_3,
    faq_pic_4,
    johnson,
    merck,
    moderna,
    monjaro,
    mounj,
    nova,
    pfizer,
    pharma,
    pharPart,
    rinvoq,
    rin_1,
    scherPlo,
    sinovac,
    victoza,
    vic1,
    vic2,
    vic3,
    wegovy,
    logo,
    shoppingCart,
    mainImage,
    infoImage,
    profile,
    menuResp,
    backArrow,
    delivery,
    reliability,
    safety,

}

export const products = [
   {
    _id: "0001",
    name: 'Enbrel',
    description: 'Lorem ipsum',
    price: 100,
    image: [enbrel],
    dose: ['100mg', '200mg'],
    bestseller: true,
    category: 'Diabetes',
   },
   {
    _id: "0002",
    name: 'Lipitor',
    description: 'Lorem ipsum',
    price: 200,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: true
   },
   {
    _id: "0003",
    name: 'Mounjaro',
    description: 'Lorem ipsum',
    price: 100,
    image: [monjaro],
    info: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: true
   },
   {
    _id: "0004",
    name: 'Nurtec',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0005",
    name: 'Plavix',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0006",
    name: 'Rinvoq',
    description: 'Lorem ipsum',
    price: 100,
    image: [rin_1],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0007",
    name: 'Saxenda',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0008",
    name: 'Victoza',
    description: 'Lorem ipsum',
    price: 100,
    image: [vic1, vic2, vic3, victoza],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0009",
    name: 'Wegovy',
    description: 'Lorem ipsum',
    price: 100,
    image: [wegovy],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0010",
    name: 'Pharma',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0011",
    name: 'Pharma Partners',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0012",
    name: 'Rinvoq',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0013",
    name: 'Schering-Plough',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0014",
    name: 'Sinovac',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0015",
    name: 'Victoza',
    description: 'Lorem ipsum',
    price: 549.00,
    image: [],
    dose: ['1 month supply'],
    bestseller: false
   },
   {
    _id: "0016",
    name: 'Wegovy',
    description: 'Lorem ipsum',
    price: 100,
    image: [],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},

]