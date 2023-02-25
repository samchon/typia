import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_DynamicUndefined = _test_assertClone("DynamicUndefined", DynamicUndefined.generate, (input: any): typia.Primitive<DynamicUndefined> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    const $join = (typia.createAssertClone as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicUndefined => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return (null !== value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                })) && (undefined === value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                }));
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicUndefined>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicUndefined;
}; const clone = (input: DynamicUndefined): typia.Primitive<DynamicUndefined> => {
    const $join = (typia.createAssertClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* DynamicUndefined */; return output as DynamicUndefined; }, DynamicUndefined.SPOILERS);
