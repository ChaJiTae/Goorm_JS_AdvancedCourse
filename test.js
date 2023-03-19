const song = {author : '비',date: '2020-05-31',title:'깡',body:'화려한 조명이 나를 감싸네이예에'};

//키 값 이름으로 변수를 선언하는 방법 - 구조분해할당
//const {author,date,title,body} = song;
//console.log(author,date,title,body);

//키 값과 다른 이름으로 변수를 선언하는 방법 - 구조분해할당
//const {author:name,date:time,title:mainTitle,body:lyric} = song;
//console.log(name,time,mainTitle,lyric);

//예시)
//HTTP/1.1 200 OK
//Content-type: application/json;charset=UTF-8
var kakaoResponse = {
    "tid": "T1234567890123456789",
    "cid": "TC0ONETIME",
    "status": "SUCCESS_PAYMENT",
    "partner_order_id": "partner_order_id",
    "partner_user_id": "partner_user_id",
    "payment_method_type": "MONEY",
    "item_name": "초코파이",
    "quantity": 1,
    "amount": {
        "total": 2200,
        "tax_free": 0,
        "vat": 200,
        "point": 0,
        "discount": 0,
        "green_deposit": 0
    },
    "canceled_amount": {
        "total": 0,
        "tax_free": 0,
        "vat": 0,
        "point": 0,
        "discount": 0,
        "green_deposit": 0
    },
    "cancel_available_amount": {
        "total": 2200,
        "tax_free": 0,
        "vat": 200,
        "point": 0,
        "discount": 0,
        "green_deposit": 0
    },
    "created_at": "2016-11-15T21:18:22",
    "approved_at": "2016-11-15T21:20:48",
    "payment_action_details": [
        {
            "aid": "A5678901234567890123",
            "payment_action_type": "PAYMENT",
            "payment_method_type": "MONEY",
            "amount": 2200,
            "point_amount": 0,
            "discount_amount": 0,
            "approved_at": "2016-11-15T21:20:48",
            "green_deposit": 0
        }
    ]
}

const {item_name : name,approved_at : date,amount:{total : total_price}}=kakaoResponse;
console.log(name,date,total_price);