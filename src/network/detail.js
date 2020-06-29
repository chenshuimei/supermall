import {request} from './request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class detailGoods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
    }
}

export class shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo//店铺logo
        this.name = shopInfo.name//店铺名称
        this.sells = shopInfo.cSells//总销量
        this.cGoods = shopInfo.cGoods//全部宝贝（产品）
        this.score = shopInfo.score
        
    }
}

export class goodsParamInfo {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}