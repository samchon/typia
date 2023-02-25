import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_DynamicSimple = _test_validateClone("DynamicSimple", DynamicSimple.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<DynamicSimple>> => { const validate = (input: any): typia.IValidation<DynamicSimple> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    const $join = (typia.validateClone as any).join;
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
}; const clone = (input: DynamicSimple): typia.Primitive<DynamicSimple> => {
    const $join = (typia.validateClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), DynamicSimple.SPOILERS);
