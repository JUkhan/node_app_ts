import {fizzBuzz} from '../../src/exercise/fizzBuzz'

describe('fizzBuzz', ()=>{
    // it('should throw an exxception if input is not a number',()=>{
    //     expect(()=>{
    //         fizzBuzz(null);
    //         fizzBuzz('');
    //         fizzBuzz({});
    //     }).toThrow();
    // })
    it('should return FizzBuzz if input is divisible by 3 and 5', ()=>{
        const resullt = fizzBuzz(15);
        expect(resullt).toBe('FizzBuzz')
    })
    it('should return Fizz if input is divisible by 3', ()=>{
        const resullt = fizzBuzz(3);
        expect(resullt).toBe('Fizz')
    })
    it('should return Buzz if input is divisible by 5', ()=>{
        const resullt = fizzBuzz(5);
        expect(resullt).toBe('Buzz')
    })
    it('should return number if input not divisible by 3 or 5', ()=>{
        const resullt = fizzBuzz(1);
        expect(resullt).toBe(1)
    })
})