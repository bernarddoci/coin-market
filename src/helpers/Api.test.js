import Api from './Api';

it("calls axios and returns coins list", () => {
    const coins = Api.getCoinsList();
    console.log(coins);
})

it("calls axios and returns coin detail", () => {
    const detail = Api.getCoinDetail();
    console.log(detail);
})