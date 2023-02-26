import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_assertClone_ClassMethod = _test_assertClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((input: any): typia.Primitive<ClassMethod.Animal> => {
            const assert = (input: any): ClassMethod.Animal => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassMethod.Animal => {
                    const $ao0 = (
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
                                expected: "Resolve<ClassMethod.Animal>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ClassMethod.Animal,
            ): typia.Primitive<ClassMethod.Animal> => {
                const $co0 = (input: any): any => ({
                    name: input.name as any,
                    age: input.age as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ClassMethod.SPOILERS,
);
