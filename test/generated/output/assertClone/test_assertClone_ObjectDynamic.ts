import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ObjectDynamic = _test_assertClone("ObjectDynamic", ObjectDynamic.generate, (input) => ((input: any): typia.Primitive<ObjectDynamic> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    const $join = (typia.assertClone as any).join;
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
}; const clone = (input: ObjectDynamic): typia.Primitive<ObjectDynamic> => {
    const $join = (typia.assertClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectDynamic */; return output as ObjectDynamic; })(input), ObjectDynamic.SPOILERS);
