import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_assertParse_ObjectDynamic = _test_assertParse("ObjectDynamic", ObjectDynamic.generate, (input) => ((input: string): typia.Primitive<ObjectDynamic> => { const assert = (input: any): ObjectDynamic => {
    const $guard = (typia.assertParse as any).guard;
    const $join = (typia.assertParse as any).join;
    const __is = (input: any): input is ObjectDynamic => {
        const $io0 = (input: any): boolean => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value;
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectDynamic => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "(boolean | number | string)",
                        value: value
                    });
                return true;
            });
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(input), ObjectDynamic.SPOILERS);
