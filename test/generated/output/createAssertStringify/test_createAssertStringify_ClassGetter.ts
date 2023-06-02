import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createAssertStringify_ClassGetter = _test_assertStringify(
    "ClassGetter",
    ClassGetter.generate,
    (input: any): string => {
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
            const $guard: any = (typia.createAssertStringify as any).guard;
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
        const stringify: any = (input: ClassGetter): string => {
            const $string: any = (typia.createAssertStringify as any).string;
            const $so0: any = (input: any): any =>
                `{"id":${$string(input.id)},"name":${$string(
                    input.name,
                )},"dead":${null !== input.dead ? input.dead : "null"}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    ClassGetter.SPOILERS,
);
