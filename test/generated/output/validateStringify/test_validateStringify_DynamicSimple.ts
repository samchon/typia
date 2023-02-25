import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_DynamicSimple = _test_validateStringify("DynamicSimple", DynamicSimple.generate, (input) => ((input: DynamicSimple): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DynamicSimple> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const $join = (typia.validateStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicSimple => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return "number" === typeof value && !Number.isNaN(value) || $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                return true;
            }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicSimple>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicSimple>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicSimple>;
}; const stringify = (input: DynamicSimple): string => {
    const $join = (typia.validateStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${value}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), DynamicSimple.SPOILERS);
