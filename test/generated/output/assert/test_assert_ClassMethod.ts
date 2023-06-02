import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_assert_ClassMethod = _test_assert(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: any): ClassMethod.Animal => {
            const __is: any = (input: any): input is ClassMethod.Animal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age)
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassMethod.Animal => {
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
        })(input),
    ClassMethod.SPOILERS,
);
