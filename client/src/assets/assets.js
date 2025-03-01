import amgen from './amgen-trans.png'
import astrazeneca from './astrazeneca-trans.png'
import bayer from './bayer-trans.png'
import cen_25 from './cen_25.png'
import cen_100 from './cen_100.png'
import cen_150 from './cen_150.png'
import cen_200 from './cen_200.png'
import cen_d from './cen_d.png'
import cen_soft_100 from './cen_soft_100.png'
import dup_1 from './dup_1.png'
import dup_cost from './dup_prices.jpg'
import dup_info from './dup_info.png'
import dup_logo from './dup_logo.png'
import enbrel from './enbrel.png'
import enb_prices from './enb_prices.jpg'
import faq from './faq_rm.png'
import faq_arrow from './faq_arrow_rm.png'
import faq_pic_1 from './faq_pic_1_rm.png'
import faq_pic_2 from './faq_pic_2_rm.png'
import faq_pic_3 from './faq_pic_3_rm.png'
import faq_pic_4 from './faq_pic_4_rm.png'
import johnson from './jo&jo.png'
import lip_logo from './lip_logo.png'
import lip_main from './lip_main.png'
import lip_prices from './lip_prices.jpg'
import merck from './merck-trans.png'
import moderna from './moderna.png'
import monjaro from "./monjaro.png"
import mounj from './mounj-logo.png'
import moun_rm from './moun_rm.png'
import nova from './nova.png'
import nurt_1 from './nurt_1.png'
import nur_prices from './nur_prices.jpg'
import pan_map from './pan_map.jpg'
import pla_logo from './pla_logo.png'
import pla_main from './pla_main.png'
import pla_prices from './pla_prices.jpg'
import pfizer from './pfizer-trans.png'
import pharma from './pharma.png'
import pharPart from './pharma-partners.png'
import pox_60 from './pox_60.png'
import rin_logo from './rin_logo.png'
import rinvoq from './rinvoq.png'
import rin_1 from './rin_1.png'
import rin_prices from './rin_prices.png'
import sax_logo from './sax_logo.png'
import sax_1 from './sax_1.png'
import sax_desc from './sax_desc.png'
import sax_prices from './sax_prices.jpg'
import sax_rev from './sax_rev.png'
import sinovac from './sinovac.png'
import scherPlo from './schering-plough.png'
import sl_map from './sl_map.jpg'
import tada_20 from './tada_20.png'
import tada_ex_sup from './tada_ex_sup.png'
import victoza from './victoza.png'
import vic1 from './vic-1.png'
import vic2 from './vict-2.png'
import vic_2_rm from './vic_2_rm.png'
import vic3 from './vict-3.png'
import vid_5 from './vid_5.png'
import vid_10 from './vid_10.png'
import vid_20 from './vid_20.png'
import vid_40 from './vid_40.png'
import vili_60 from './vili_60.png'
import vili_super from './vili_super.png'
import vl_60 from './vl_60.png'
import vl_black_80 from './vl_black_80.png'
import vl_td_80 from './vl_td_80.png'
import wgov_info from './wgov_info.png'
import wegovy from './wegovy.png'
import wgov_1 from './wgov_1.png'
import wtc from './wtc.jpg'
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
    cen_25,
    cen_100,
    cen_150,
    cen_200,
    cen_d,
    cen_soft_100,
    dup_cost,
    enbrel,
    enb_prices,
    faq,
    faq_arrow,
    faq_pic_1,
    faq_pic_2,
    faq_pic_3,
    faq_pic_4,
    johnson,
    lip_logo,
    lip_main,
    lip_prices,
    merck,
    moderna,
    monjaro,
    moun_rm,
    mounj,
    nova,
    nurt_1,
    pan_map,
    pla_logo,
    pla_main,
    pla_prices,
    pfizer,
    pharma,
    pharPart,
    pox_60,
    rin_logo,
    rinvoq,
    rin_1,
    rin_prices,
    sax_logo,
    sax_1,
    sax_desc,
    sax_prices,
    sax_rev,
    scherPlo,
    sinovac,
    sl_map,
    tada_20,
    tada_ex_sup,
    victoza,
    vic1,
    vic2,
    vic_2_rm,
    vic3,
    vid_5,
    vid_10,
    vid_20,
    vid_40,
    vili_60,
    vili_super,
    vl_60,
    vl_black_80,
    vl_td_80,
    wgov_info,
    wegovy,
    wgov_1,
    wtc,
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
        name: 'Cenforce',
        category: 'Impotence',
        description: 'Lorem ipsum',
        price: 249,
        info: [],
        image: [cen_25,cen_100,cen_150,cen_200,cen_d,cen_soft_100,],
        dose: ['25mg', '100mg', 'Soft-100mg', '150mg', '200mg', 'D'],
        bestseller: true,
        
       },
    {
        _id: "0002",
        name: 'Dupixent',
        category: 'Chronic Diseases',
        description: 'Dupixent (dupilumab) is a biologic that is given by subcutaneous (under the skin) injection that may be used to treat the following inflammatory conditions: Atopic Dermatitis (eczema), Eosinophilic, Chronic Rhinosinusitis.',
        price: 945,
        image: [dup_1],
        logo: [dup_logo],
        prices: [dup_cost],
        dose: ['300mg'],
        bestseller: true,
        
       },
   {
    _id: "0003",
    name: 'Enbrel', 
    category: '',
    description: '',
    price: 945,
    image: [enbrel],
    prices: enb_prices,
    dose: ['50mg'],
    bestseller: true,
   },
   {
    _id: "0004",
    name: 'Lipitor',
    category: '',
    description: 'Lorem ipsum',
    price: 945,
    image: [lip_main],
    logo: [lip_logo],
    prices: lip_prices,
    dose: ['10mg'],
    bestseller: true
   },
   {
    _id: "0005",
    name: 'Mounjaro',
    category: '',
    description: 'Lorem ipsum',
    price: 100,
    image: [moun_rm, mounj],
    info: [],
    dose: ['100mg', '200mg'],
    bestseller: true
   },
   {
    _id: "0006",
    name: 'Nurtec ODT',
    category: '',
    description: 'Lorem ipsum',
    price: 497,
    image: [nurt_1],
    prices: nur_prices,
    dose: ['75mg'],
    bestseller: false
   },
   {
    _id: "0007",
    name: 'Plavix',
    category: '',
    description: 'Lorem ipsum',
    price: 428,
    image: [pla_main],
    logo: [pla_logo],
    prices: pla_prices,
    dose: ['75mg'],
    bestseller: false
   },
   {
    _id: "0008",
    name: 'Poxet',
    category: 'Impotence',
    description: 'Lorem ipsum',
    price: 249,
    image: [pox_60],
    dose: ['60mg'],
    bestseller: false
   },
   {
    _id: "0009",
    name: 'Rinvoq',
    category: 'Chronic Diseases',
    description: 'Lorem ipsum',
    price: 100,
    info: [rinvoq],
    image: [rin_1, rin_logo],
    logo: [rin_logo],
    prices: [rin_prices],
    dose: ['15mg'],
    bestseller: false
   },
   {
    _id: "0010",
    name: 'Saxenda',
    category: 'Weight Loss',
    description: 'Lorem ipsum',
    price: 100,
    info: [sax_desc],
    image: [sax_1],
    logo: [sax_logo],
    prices: [sax_prices],
    dose: ['6mg'],
    bestseller: false
   },
   {
    _id: "0011",
    name: 'Tadarise',
    category: 'Impotence',
    description: 'Lorem ipsum',
    price: 249,
    info: [],
    image: [tada_20, tada_ex_sup],
    dose: ['20mg','Extra Super'],
    bestseller: false
   },
   {
    _id: "0012",
    name: 'Vilitra',
    category: 'Impotence',
    description: 'Lorem ipsum',
    price: 249,
    info: [],
    image: [vili_60, vili_super],
    dose: ['60mg', 'Super'],
    bestseller: false
   },
   
   {
    _id: "0013",
    name: 'Vidalista',
    category: 'Impotence',
    description: 'Lorem ipsum',
    price: 249,
    image: [vid_5, vid_10, vid_20, vid_40, vl_60, vl_td_80, vl_black_80],
    dose: ['5mg','10mg', '20mg', '40mg','60mg', '80mg', 'Black 80mg', 'CT'],
    bestseller: false
   },

   {
    _id: "0014",
    name: 'Victoza',
    category: 'Weight Loss',
    description: 'Lorem ipsum',
    price: 100,
    image: [vic1, vic2, vic_2_rm, vic3, victoza],
    dose: ['100mg', '200mg'],
    bestseller: false
   },
   {
    _id: "0015",
    name: 'Wegovy',
    description: 'Lorem ipsum',
    price: 549,
    info: [wgov_info],
    image: [wgov_1, wegovy],
    dose: ['0.25mg'],
    bestseller: false
   },
   /*** */
//    {
//     _id: "0010",
//     name: 'Pharma',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
//    {
//     _id: "0011",
//     name: 'Pharma Partners',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
//    {
//     _id: "0012",
//     name: 'Rinvoq',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
//    {
//     _id: "0013",
//     name: 'Schering-Plough',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
//    {
//     _id: "0014",
//     name: 'Sinovac',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
//    {
//     _id: "0015",
//     name: 'Victoza',
//     description: 'Lorem ipsum',
//     price: 549.00,
//     image: [],
//     dose: ['1 month supply'],
//     bestseller: false
//    },
//    {
//     _id: "0016",
//     name: 'Wegovy',
//     description: 'Lorem ipsum',
//     price: 100,
//     image: [],
//     dose: ['100mg', '200mg'],
//     bestseller: false
//    },
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},
    // {id: 1, name: "Product 1", price: 10.99},

]