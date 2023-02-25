import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectNullable = _test_equals("ObjectNullable", ObjectNullable.generate, (input: any, _exceptionable: boolean): input is ObjectNullable => {
    const $io0 = (input: any, _exceptionable: boolean) => "string" === typeof input.name && ("object" === typeof input.manufacturer && null !== input.manufacturer && $io1(input.manufacturer, true && _exceptionable)) && ("object" === typeof input.brand && null !== input.brand && $io2(input.brand, true && _exceptionable)) && ("object" === typeof input.similar && null !== input.similar && $iu0(input.similar, true && _exceptionable)) && (4 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "manufacturer", "brand", "similar"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "manufacturer" === input.type && "string" === typeof input.name && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["type", "name"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => "brand" === input.type && "string" === typeof input.name && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["type", "name"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean) => (() => {
        if ("manufacturer" === input.type)
            return $io1(input, true && _exceptionable);
        if ("brand" === input.type)
            return $io2(input, true && _exceptionable);
        return false;
    })();
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0], true)) && ("object" === typeof input[1] && null !== input[1] && $io0(input[1], true)) && ("object" === typeof input[2] && null !== input[2] && $io0(input[2], true)));
});
