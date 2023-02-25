import typia from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ToJsonAtomicSimple = _test_equals("ToJsonAtomicSimple", ToJsonAtomicSimple.generate, (input: any, _exceptionable: boolean): input is ToJsonAtomicSimple => {
    const $io0 = (input: any, _exceptionable: boolean) => true && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["toJSON"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => true && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["toJSON"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => true && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["toJSON"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0], true)) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1], true)) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2], true)));
});
