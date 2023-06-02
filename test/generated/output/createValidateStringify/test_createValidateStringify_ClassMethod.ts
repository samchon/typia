import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createValidateStringify_ClassMethod = _test_validateStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input: ClassMethod): typia.IValidation<string> => {
        const validate: any = (input: any): typia.IValidation<ClassMethod> => {
            const __is: any = (input: any): input is ClassMethod => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateStringify as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassMethod => {
                    const $vo0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            ("number" === typeof input.age &&
                                Number.isFinite(input.age)) ||
                                $report(_exceptionable, {
                                    path: _path + ".age",
                                    expected: "number",
                                    value: input.age,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ClassMethod.Animal",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ClassMethod.Animal",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const stringify: any = (input: ClassMethod): string => {
            const $string: any = (typia.createValidateStringify as any).string;
            const $number: any = (typia.createValidateStringify as any).number;
            return `{"name":${$string(input.name)},"age":${$number(
                input.age,
            )}}`;
        };
        const output: any = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    ClassMethod.SPOILERS,
);
