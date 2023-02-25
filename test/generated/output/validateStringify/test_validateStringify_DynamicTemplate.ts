import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_DynamicTemplate = _test_validateStringify("DynamicTemplate", DynamicTemplate.generate, (input) => ((input: DynamicTemplate): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DynamicTemplate> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const $join = (typia.validateStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicTemplate => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/^(prefix_(.*))/).test(key))
                    return "string" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value
                    });
                if (RegExp(/((.*)_postfix)$/).test(key))
                    return "string" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value
                    });
                if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                    return "number" === typeof value && !Number.isNaN(value) || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                    return "boolean" === typeof value || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "boolean",
                        value: value
                    });
                return true;
            }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicTemplate>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicTemplate>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicTemplate>;
}; const stringify = (input: DynamicTemplate): string => {
    const $join = (typia.validateStringify as any).join;
    const $string = (typia.validateStringify as any).string;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; if (RegExp(/^(prefix_(.*))/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/((.*)_postfix)$/).test(key))
        return `${JSON.stringify(key)}:${$string(value)}`; if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
        return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), DynamicTemplate.SPOILERS);
