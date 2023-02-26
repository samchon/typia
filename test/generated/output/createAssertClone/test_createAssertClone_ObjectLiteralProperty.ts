import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createAssertClone_ObjectLiteralProperty = _test_assertClone(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: any): typia.Primitive<ObjectLiteralProperty.ISomething> => {
        const assert = (input: any): ObjectLiteralProperty.ISomething => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectLiteralProperty.ISomething => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" ===
                        typeof input["something-interesting-do-you-want?"] ||
                        $guard(_exceptionable, {
                            path:
                                _path +
                                '["something-interesting-do-you-want?"]',
                            expected: "string",
                            value: input["something-interesting-do-you-want?"],
                        })) &&
                    ("string" ===
                        typeof input["or-something-crazy-do-you-want?"] ||
                        $guard(_exceptionable, {
                            path: _path + '["or-something-crazy-do-you-want?"]',
                            expected: "string",
                            value: input["or-something-crazy-do-you-want?"],
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Resolve<ObjectLiteralProperty.ISomething>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: ObjectLiteralProperty.ISomething,
        ): typia.Primitive<ObjectLiteralProperty.ISomething> => {
            const $co0 = (input: any): any => ({
                "something-interesting-do-you-want?": input[
                    "something-interesting-do-you-want?"
                ] as any,
                "or-something-crazy-do-you-want?": input[
                    "or-something-crazy-do-you-want?"
                ] as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    ObjectLiteralProperty.SPOILERS,
);
