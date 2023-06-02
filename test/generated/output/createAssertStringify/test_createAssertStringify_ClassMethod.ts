import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createAssertStringify_ClassMethod = _test_assertStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input: any): string => {
        const assert: any = (input: any): ClassMethod => {
            const __is: any = (input: any): input is ClassMethod => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const $guard: any = (typia.createAssertStringify as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassMethod => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassMethod.Animal",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: ClassMethod): string => {
            const $string: any = (typia.createAssertStringify as any).string;
            const $number: any = (typia.createAssertStringify as any).number;
            return `{"name":${$string(input.name)},"age":${$number(
                input.age,
            )}}`;
        };
        return stringify(assert(input));
    },
    ClassMethod.SPOILERS,
);
