import { asd, type TAsd } from "../index";

describe('Check for jest', () => {
    
    test('checking jest works...?', () => {
        expect(1).not.toBe(2);
    });
    
    test('checking import/export syntax works...?', () => {
        const qwe: TAsd = asd;
        expect(qwe.value).toBeTruthy();
    });
        
});