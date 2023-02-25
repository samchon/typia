import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ToJsonDouble = _test_validateClone("ToJsonDouble", ToJsonDouble.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<Parent>> => { const validate = (input: any): typia.IValidation<Parent> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Parent => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => true;
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Parent>;
}; const clone = (input: Parent): typia.Primitive<Parent> => {
    const $co0 = (input: any) => ({
        id: input.id,
        flag: input.flag
    });
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? "object" === typeof input.toJSON() && null !== input.toJSON() ? $co0(input.toJSON()) : input.toJSON() : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input));
