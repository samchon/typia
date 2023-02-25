import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_ToJsonUndefined = _test_validateEquals("ToJsonUndefined", ToJsonUndefined.generate, (input) => ((input: any): typia.IValidation<ToJsonUndefined> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonUndefined => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [0 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonUndefined>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonUndefined>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ToJsonUndefined>;
})(input));
