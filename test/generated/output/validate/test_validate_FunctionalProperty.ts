import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_FunctionalProperty = _test_validate("FunctionalProperty", FunctionalProperty.generate, (input) => ((input: any): typia.IValidation<FunctionalProperty> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalProperty => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), true || $report(_exceptionable, {
                path: _path + ".closure",
                expected: "unknown",
                value: input.closure
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<FunctionalProperty>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<FunctionalProperty>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<FunctionalProperty>;
})(input), FunctionalProperty.SPOILERS);
