import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_DynamicNever = _test_assertParse("DynamicNever", DynamicNever.generate, (input) => ((input: string): typia.Primitive<DynamicNever> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
    const $join = (typia.assertParse as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicNever => {
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
            expected: "Resolve<DynamicNever>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicNever;
}; input = JSON.parse(input); return assert(input); })(input), DynamicNever.SPOILERS);
