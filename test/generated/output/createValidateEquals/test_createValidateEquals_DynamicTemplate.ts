import typia from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
export const test_createValidateEquals_DynamicTemplate = _test_validateEquals("DynamicTemplate", DynamicTemplate.generate, (input: any): typia.IValidation<DynamicTemplate> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const __is = (input: any, _exceptionable: boolean = true): input is DynamicTemplate => {
        const $join = (typia.createValidateEquals as any).join;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value;
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value;
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "number" === typeof value && Number.isFinite(value);
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value;
            return false;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input, true);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicTemplate => {
            const $join = (typia.createValidateEquals as any).join;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map((key: any) => {
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
                        return "number" === typeof value && Number.isFinite(value) || $report(_exceptionable, {
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
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "DynamicTemplate",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "DynamicTemplate",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
});
