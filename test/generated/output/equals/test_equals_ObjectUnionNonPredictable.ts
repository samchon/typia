import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
export const test_equals_ObjectUnionNonPredictable = _test_equals("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>> => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "object" === typeof input.value && null !== input.value && $io1(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean => "object" === typeof input.value && null !== input.value && $iu0(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean => "object" === typeof input.value && null !== input.value && $io3(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io3 = (input: any, _exceptionable: boolean = true): boolean => "boolean" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io4 = (input: any, _exceptionable: boolean = true): boolean => "object" === typeof input.value && null !== input.value && $io5(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io5 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io6 = (input: any, _exceptionable: boolean = true): boolean => "object" === typeof input.value && null !== input.value && $io7(input.value, true && _exceptionable) && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io7 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean = true): any => (() => {
        if ($io6(input, false && _exceptionable))
            return $io6(input, true && _exceptionable);
        if ($io4(input, false && _exceptionable))
            return $io4(input, true && _exceptionable);
        if ($io2(input, false && _exceptionable))
            return $io2(input, true && _exceptionable);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true));
})(input));
