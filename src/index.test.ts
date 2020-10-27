import { getText } from './index';

describe('example test suite on getTest', () => {
    test('should return \'hello world\'', () => {
        expect(getText()).toStrictEqual('hello world');
    });
});
