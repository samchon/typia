import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ConstantAtomicWrapper = _test_equals("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input: any, _exceptionable: boolean): input is ConstantAtomicWrapper => {
    const $io0 = (input: any, _exceptionable: boolean) => "boolean" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "number" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0], true)) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1], true)) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2], true)));
});
