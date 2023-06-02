import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createAssertClone_ClassGetter = _test_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    (input: any): typia.Primitive<ClassGetter> => {
        const assert: any = (input: any): ClassGetter => {
            const __is: any = (input: any): input is ClassGetter => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    (null === input.dead || "boolean" === typeof input.dead);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const $guard: any = (typia.createAssertClone as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassGetter => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead ||
                            $guard(_exceptionable, {
                                path: _path + ".dead",
                                expected: "(boolean | null)",
                                value: input.dead,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassGetter.Person",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        };
        const clone: any = (
            input: ClassGetter,
        ): typia.Primitive<ClassGetter> => {
            const $co0: any = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                dead: input.dead as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output: any = clone(input);
        return output;
    },
    ClassGetter.SPOILERS,
);
