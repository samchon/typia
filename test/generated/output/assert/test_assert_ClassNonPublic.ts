import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_assert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) =>
        ((input: any): ClassNonPublic.Accessor => {
            const __is: any = (
                input: any,
            ): input is ClassNonPublic.Accessor => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof input.implicit &&
                    "string" === typeof input.shown
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ClassNonPublic.Accessor => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.implicit ||
                            $guard(_exceptionable, {
                                path: _path + ".implicit",
                                expected: "string",
                                value: input.implicit,
                            })) &&
                        ("string" === typeof input.shown ||
                            $guard(_exceptionable, {
                                path: _path + ".shown",
                                expected: "string",
                                value: input.shown,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassNonPublic.Accessor",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
            return input;
        })(input),
    ClassNonPublic.SPOILERS,
);
