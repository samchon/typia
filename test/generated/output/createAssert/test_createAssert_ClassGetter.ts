import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createAssert_ClassGetter = _test_assert(
    "ClassGetter",
    ClassGetter.generate,
    (input: any): ClassGetter => {
        const __is: any = (input: any): input is ClassGetter => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                (null === input.dead || "boolean" === typeof input.dead);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const $guard: any = (typia.createAssert as any).guard;
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
    },
    ClassGetter.SPOILERS,
);
