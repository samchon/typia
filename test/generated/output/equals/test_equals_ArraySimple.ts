import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_equals_ArraySimple = _test_equals("ArraySimple", ArraySimple.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<ArraySimple.IPerson> => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any, _index2: number) => "object" === typeof elem && null !== elem && $io1(elem, true && _exceptionable))) && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "email", "hobbies"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.name && "string" === typeof input.body && ("number" === typeof input.rank && Number.isFinite(input.rank)) && (3 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "body", "rank"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
})(input));
