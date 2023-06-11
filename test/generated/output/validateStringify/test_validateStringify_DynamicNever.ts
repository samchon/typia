import typia from "../../../../src";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
export const test_validateStringify_DynamicNever = _test_validateStringify("DynamicNever", DynamicNever.generate, (input) => ((input: DynamicNever): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DynamicNever> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const __is = (input: any): input is DynamicNever => {
        const $join = (typia.validateStringify as any).join;
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
            const $join = (typia.validateStringify as any).join;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    if (RegExp(/(.*)/).test(key))
                        return (null !== value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value
                        })) && (undefined === value || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value
                        }));
                    return true;
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: DynamicNever): string => {
    const $join = (typia.validateStringify as any).join;
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter((str: any) => "" !== str).join(",")}}`;
    return $so0(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), DynamicNever.SPOILERS);
