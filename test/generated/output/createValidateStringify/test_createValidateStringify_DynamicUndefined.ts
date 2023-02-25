import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_DynamicUndefined = _test_validateStringify("DynamicUndefined", DynamicUndefined.generate, (input: DynamicUndefined): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DynamicUndefined> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    const $join = (typia.createValidateStringify as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicUndefined => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [false === _exceptionable || Object.keys(input).map(key => {
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
            expected: "Resolve<DynamicUndefined>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicUndefined>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicUndefined>;
}; const stringify = (input: DynamicUndefined): string => {
    const $join = (typia.createValidateStringify as any).join;
    const $so0 = (input: any) => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined}`; }).filter(str => "" !== str).join(",")}}`;
    return $so0(input);
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, DynamicUndefined.SPOILERS);
