import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
export const test_validate_ClassNonPublic = _test_validate("ClassNonPublic", ClassNonPublic.generate, (input) => ((input: any): typia.IValidation<ClassNonPublic.Accessor> => {
    const __is = (input: any): input is ClassNonPublic.Accessor => {
        return "object" === typeof input && null !== input && ("string" === typeof input.implicit && "string" === typeof input.shown);
    };
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ClassNonPublic.Accessor => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.implicit || $report(_exceptionable, {
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
                expected: "ClassNonPublic.Accessor",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ClassNonPublic.Accessor",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
})(input), ClassNonPublic.SPOILERS);
