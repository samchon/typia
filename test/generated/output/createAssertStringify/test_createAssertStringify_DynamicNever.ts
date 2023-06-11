import typia from "../../../../src";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_createAssertStringify_DynamicNever = _test_assertStringify("DynamicNever", DynamicNever.generate, (input: any): string => { const assert = (input: any): DynamicNever => {
    const __is = (input: any): input is DynamicNever => {
        const $join = (typia.createAssertStringify as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return null !== value && undefined === value;
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicNever => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $join = (typia.createAssertStringify as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every((key: any) => {
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
                expected: "DynamicNever",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: DynamicNever): string => {
    const $join = (typia.createAssertStringify as any).join;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter((str: any) => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); }, DynamicNever.SPOILERS);
