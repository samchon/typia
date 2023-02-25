import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ArraySimple = _test_equals("ArraySimple", ArraySimple.generate, (input: any, _exceptionable: boolean): input is ArraySimple => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io1(elem, true && _exceptionable))) && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "email", "hobbies"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "body", "rank"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
});
