import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_assertStringify_ObjectLiteralProperty = _test_assertStringify(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): ObjectLiteralProperty.ISomething => {
                const $guard = (typia.assertStringify as any).guard;
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
                            typeof input[
                                "something-interesting-do-you-want?"
                            ] ||
                            $guard(_exceptionable, {
                                path:
                                    _path +
                                    '["something-interesting-do-you-want?"]',
                                expected: "string",
                                value: input[
                                    "something-interesting-do-you-want?"
                                ],
                            })) &&
                        ("string" ===
                            typeof input["or-something-crazy-do-you-want?"] ||
                            $guard(_exceptionable, {
                                path:
                                    _path +
                                    '["or-something-crazy-do-you-want?"]',
                                expected: "string",
                                value: input["or-something-crazy-do-you-want?"],
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectLiteralProperty.ISomething",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (
                input: ObjectLiteralProperty.ISomething,
            ): string => {
                const $string = (typia.assertStringify as any).string;
                return `{"something-interesting-do-you-want?":${$string(
                    input["something-interesting-do-you-want?"],
                )},"or-something-crazy-do-you-want?":${$string(
                    input["or-something-crazy-do-you-want?"],
                )}}`;
            };
            return stringify(assert(input));
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
