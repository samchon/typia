import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_DynamicSimple = _test_validateParse("DynamicSimple", DynamicSimple.generate, (input: string): typia.IValidation<typia.Primitive<DynamicSimple>> => { const validate = (input: any): typia.IValidation<DynamicSimple> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    const $join = (typia.createValidateParse as any).join;
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
}; input = JSON.parse(input); const output = validate(input); return output; }, DynamicSimple.SPOILERS);
