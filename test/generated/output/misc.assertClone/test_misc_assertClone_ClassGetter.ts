import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_misc_assertClone_ClassGetter = _test_misc_assertClone(
    "ClassGetter",
    ClassGetter.generate,
    (input) =>
        ((input: any): typia.Primitive<ClassGetter.Person> => {
            const assert = (input: any): ClassGetter.Person => {
                const __is = (input: any): input is ClassGetter.Person => {
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "string" === typeof input.name &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ClassGetter.Person => {
                        const $guard = (typia.misc.assertClone as any).guard;
                        const $ao0 = (
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
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ClassGetter.Person",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassGetter.Person",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ClassGetter.Person,
            ): typia.Primitive<ClassGetter.Person> => {
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    dead: input.dead as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ClassGetter.SPOILERS,
);
