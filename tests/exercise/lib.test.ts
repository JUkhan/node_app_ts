import {absolute, greet, getCurrencies, getProduct, registerUser, applyDiscount} from '../../src/exercise/lib';
import db from '../../src/exercise/db';

describe('absolute',()=>{
    it('should return positive number if inputt is positive',()=>{
        const res=absolute(1);
        expect(res).toEqual(1);
    })
    it('should return positive number if input is negattive',()=>{
        const res=absolute(-1);
        expect(res).toEqual(1);
    })
    it('should return 0 if input is 0',()=>{
        const res=absolute(0);
        expect(res).toEqual(0);
    })
})

describe('greet', ()=>{
    it('should return the greeting message',()=>{
        const res = greet('Jasim')
        expect(res).toMatch(/Jasim/)
        //or
        expect(res).toContain('Jasim')
    })
})

describe('getCurrencies', ()=>{
    it('should contain currency like (USD, AUD, EUR)',()=>{
        const result = getCurrencies();
        //Too general
        expect(result).toBeDefined();
        expect(result).not.toBeNull();
        //Too specific
        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
        expect(result.length).toBe(3);
        //proper way
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        //ideal way ***
        expect(result).toEqual(expect.arrayContaining(['USD','EUR','AUD']))
    })
})

describe('getProduct',()=>{
    it('shoulld return a specific objectt',()=>{
        const result = getProduct(1);
        expect(result).toEqual({id:1, price:10})
        expect(result).toMatchObject({id:1});
        expect(result).toEqual(expect.objectContaining({id:1}))
        expect(result).toHaveProperty('id',1)
    })
})

describe('registerUser',()=>{
    it('should return user object if input is not null', ()=>{
        const result = registerUser('jasim')
        expect(result).toMatchObject({username: 'jasim'})
        expect(result.id).toBeGreaterThan(0)
    })
    it('should throw exception if input is null',()=>{
        const args = [null,undefined,'', NaN, 0, false];
        expect(()=>{
            args.forEach(a=>registerUser(a))
        }).toThrow()

    })
})

describe('getCustomerSync', ()=>{
    it('should return 10% discount if points is greater then 10', ()=>{
        const order ={customerId:1,totalPrice:10};

        const fn = jest.fn()
        db.getCustomerSync=fn.mockReturnValue({id:1, points:13})
       
        applyDiscount(order)
        
        expect(order.totalPrice).toBe(9)
        expect(fn.mock.calls[0][0]).toBe(1)
    })
})