import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_DynamicTemplate = _test_validate("DynamicTemplate", DynamicTemplate.generate, (input) => ((input: any): typia.IValidation<DynamicTemplate> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    const $join = (typia.validate as any).join;
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
                    return "number" === typeof value || $report(_exceptionable, {
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
})(input), DynamicTemplate.SPOILERS);
