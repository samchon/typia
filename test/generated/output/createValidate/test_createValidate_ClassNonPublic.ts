import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_createValidate_ClassNonPublic = _test_validate(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input: any): typia.IValidation<ClassNonPublic> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ClassNonPublic => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.implicit ||
                        $report(_exceptionable, {
                            path: _path + ".implicit",
                            expected: "string",
                            value: input.implicit,
                        }),
                    "string" === typeof input.shown ||
                        $report(_exceptionable, {
                            path: _path + ".shown",
                            expected: "string",
                            value: input.shown,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ClassNonPublic.Accessor>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<ClassNonPublic.Accessor>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
    ClassNonPublic.SPOILERS,
);
