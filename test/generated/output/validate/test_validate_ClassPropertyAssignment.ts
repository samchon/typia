import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_validate_ClassPropertyAssignment = _test_validate(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) =>
        ((input: any): typia.IValidation<ClassPropertyAssignment> => {
            const __is = (input: any): input is ClassPropertyAssignment => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "assignment" === input.note &&
                    false === input.editable &&
                    "boolean" === typeof input.incremental;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassPropertyAssignment => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "assignment" === input.note ||
                                $report(_exceptionable, {
                                    path: _path + ".note",
                                    expected: '"assignment"',
                                    value: input.note,
                                }),
                            false === input.editable ||
                                $report(_exceptionable, {
                                    path: _path + ".editable",
                                    expected: "false",
                                    value: input.editable,
                                }),
                            "boolean" === typeof input.incremental ||
                                $report(_exceptionable, {
                                    path: _path + ".incremental",
                                    expected: "boolean",
                                    value: input.incremental,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<ClassPropertyAssignment>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ClassPropertyAssignment>",
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
        })(input),
    ClassPropertyAssignment.SPOILERS,
);
