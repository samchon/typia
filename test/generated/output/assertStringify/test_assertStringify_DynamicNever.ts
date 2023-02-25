import typia from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_DynamicNever = _test_assertStringify("DynamicNever", DynamicNever.generate, (input) => ((input: DynamicNever): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    const $join = (typia.assertStringify as any).join;
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
}; const stringify = (input: DynamicNever): string => {
    const $join = (typia.assertStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), DynamicNever.SPOILERS);
