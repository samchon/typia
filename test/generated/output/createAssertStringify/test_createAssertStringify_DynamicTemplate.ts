import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicTemplate = _test_assertStringify("DynamicTemplate", DynamicTemplate.generate, (input: DynamicTemplate): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    const $join = (typia.createAssertStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicTemplate => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "number" === typeof value && !Number.isNaN(value) || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicTemplate>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicTemplate;
}; const stringify = (input: DynamicTemplate): string => {
    const $join = (typia.createAssertStringify as any).join;
    const $string = (typia.createAssertStringify as any).string;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicTemplate.SPOILERS);
