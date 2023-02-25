import typia from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ClassNonPublic = _test_validate("ClassNonPublic", ClassNonPublic.generate, (input) => ((input: any): typia.IValidation<Accessor> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Accessor => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.implicit || $report(_exceptionable, {
                path: _path + ".implicit",
                expected: "string",
                value: input.implicit
            }), "string" === typeof input.shown || $report(_exceptionable, {
                path: _path + ".shown",
                expected: "string",
                value: input.shown
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassNonPublic.Accessor>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassNonPublic.Accessor>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Accessor>;
})(input), ClassNonPublic.SPOILERS);
