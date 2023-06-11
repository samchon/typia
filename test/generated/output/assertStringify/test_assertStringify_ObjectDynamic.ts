import typia from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_assertStringify_ObjectDynamic = _test_assertStringify("ObjectDynamic", ObjectDynamic.generate, (input) => ((input: any): string => { const assert = (input: any): ObjectDynamic => {
    const __is = (input: any): input is ObjectDynamic => {
        const $join = (typia.assertStringify as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
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
            const $guard = (typia.assertStringify as any).guard;
            const $join = (typia.assertStringify as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every((key: any) => {
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
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: ObjectDynamic): string => {
    const $join = (typia.assertStringify as any).join;
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    const $throws = (typia.assertStringify as any).throws;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${(() => {
        if ("string" === typeof value)
            return $string(value);
        if ("number" === typeof value)
            return $number(value);
        if ("boolean" === typeof value)
            return value;
        $throws({
            expected: "(boolean | number | string)",
            value: value
        });
    })()}`; }).filter((str: any) => "" !== str).join(",")}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), ObjectDynamic.SPOILERS);
