import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicSimple = _test_assertStringify("DynamicSimple", DynamicSimple.generate, (input: DynamicSimple): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    const $join = (typia.createAssertStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicSimple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "number" === typeof value && !Number.isNaN(value) || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicSimple>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicSimple;
}; const stringify = (input: DynamicSimple): string => {
    const $join = (typia.createAssertStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicSimple.SPOILERS);
