import { formatCurrency } from "../../utils/money.js";
describe('light test ', ()=>{
    it('convert cents into dollars ', () => {
        expect(formatCurrency(2095)).toEqual('20.95'); 
    })
    it('working with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00')
    })
})