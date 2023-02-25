import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_DynamicTemplate = _test_assert("DynamicTemplate", DynamicTemplate.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    const $join = (typia.assert as any).join;
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
                return "number" === typeof value || $guard(_exceptionable, {
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
})(input), DynamicTemplate.SPOILERS);
