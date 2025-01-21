import amgen from './amgen-trans.png'
import astrazeneca from './astrazeneca-trans.png'
import bayer from './bayer-trans.png'
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
    johnson,
    merck,
    moderna,
    mounj,
    nova,
    pfizer,
    pharma,
    pharPart,
    rinvoq,
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
    name: 'AstraZeneca',
    description: 'Lorem ipsum',
    price: 100,
    image: [astrazeneca],
    dose: ['100mg', '200mg'],
    bestseller: true,
    category: 'Diabetes',
   },
   {
    _id: "0002",
    name: 'Amgen',
    description: 'Lorem ipsum',
    price: 200,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: true
   },
   {
    _id: "0003",
    name: 'Bayer',
    description: 'Lorem ipsum',
    price: 100,
    image: [bayer],
    dose: ['100mg', '200mg'],
    bestseller: true
   },
   {
    _id: "0004",
    name: 'Johnson & Johnson',
    description: 'Lorem ipsum',
    price: 100,
    image: [johnson],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0005",
    name: 'Merck',
    description: 'Lorem ipsum',
    price: 100,
    image: [merck],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0006",
    name: 'Moderna',
    description: 'Lorem ipsum',
    price: 100,
    image: [moderna],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0007",
    name: 'Monjaro',
    description: 'Lorem ipsum',
    price: 100,
    image: [monjaro],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0008",
    name: 'Novartis',
    description: 'Lorem ipsum',
    price: 100,
    image: [nova],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0009",
    name: 'Pfizer',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0010",
    name: 'Pharma',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0011",
    name: 'Pharma Partners',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0012",
    name: 'Rinvoq',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0013",
    name: 'Schering-Plough',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0014",
    name: 'Sinovac',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0015",
    name: 'Victoza',
    description: 'Lorem ipsum',
    price: 549.00,
    image: [vic1, vic2, vic3, victoza],
    dose: ['1 month supply'],
    bestseller: false
   },
   {
    _id: "0016",
    name: 'Wegovy',
    description: 'Lorem ipsum',
    price: 100,
    image: [amgen],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},

]