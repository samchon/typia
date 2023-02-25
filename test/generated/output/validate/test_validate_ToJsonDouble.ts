import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ToJsonDouble = _test_validate("ToJsonDouble", ToJsonDouble.generate, (input) => ((input: any): typia.IValidation<Parent> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
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
})(input));
