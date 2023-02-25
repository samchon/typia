import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_DynamicSimple = _test_validate("DynamicSimple", DynamicSimple.generate, (input: any): typia.IValidation<DynamicSimple> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    const $join = (typia.createValidate as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicSimple => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [false === _exceptionable || Object.keys(input).map(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return "number" === typeof value || $report(_exceptionable, {
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
}, DynamicSimple.SPOILERS);
