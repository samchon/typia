import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ObjectDynamic = _test_assertParse("ObjectDynamic", ObjectDynamic.generate, (input: string): typia.Primitive<ObjectDynamic> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
    const $join = (typia.createAssertParse as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectDynamic => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "string" === typeof value || "number" === typeof value || "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectDynamic>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectDynamic;
}; input = JSON.parse(input); return assert(input); }, ObjectDynamic.SPOILERS);
