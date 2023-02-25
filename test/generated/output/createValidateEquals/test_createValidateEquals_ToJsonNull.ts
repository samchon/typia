import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_createValidateEquals_ToJsonNull = _test_validateEquals("ToJsonNull", ToJsonNull.generate, (input: any): typia.IValidation<ToJsonNull> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonNull => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [true || $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                if (["toJSON"].some(prop => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value)
                    return true;
                return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value
                });
            }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ToJsonNull>;
});
