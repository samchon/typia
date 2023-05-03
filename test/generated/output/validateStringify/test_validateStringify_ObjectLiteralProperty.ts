import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_validateStringify_ObjectLiteralProperty =
    _test_validateStringify(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (input) =>
            ((
                input: ObjectLiteralProperty.ISomething,
            ): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectLiteralProperty.ISomething> => {
                    const __is = (
                        input: any,
                    ): input is ObjectLiteralProperty.ISomething => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" ===
                                typeof input[
                                    "something-interesting-do-you-want?"
                                ] &&
                            "string" ===
                                typeof input["or-something-crazy-do-you-want?"]
                        );
                    };
                    const errors = [] as any[];
                    const $report = (typia.validateStringify as any).report(
                        errors,
                    );
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectLiteralProperty.ISomething => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" ===
                                        typeof input[
                                            "something-interesting-do-you-want?"
                                        ] ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                '["something-interesting-do-you-want?"]',
                                            expected: "string",
                                            value: input[
                                                "something-interesting-do-you-want?"
                                            ],
                                        }),
                                    "string" ===
                                        typeof input[
                                            "or-something-crazy-do-you-want?"
                                        ] ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                '["or-something-crazy-do-you-want?"]',
                                            expected: "string",
                                            value: input[
                                                "or-something-crazy-do-you-want?"
                                            ],
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "ObjectLiteralProperty.ISomething",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "ObjectLiteralProperty.ISomething",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const stringify = (
                    input: ObjectLiteralProperty.ISomething,
                ): string => {
                    const $string = (typia.validateStringify as any).string;
                    return `{"something-interesting-do-you-want?":${$string(
                        input["something-interesting-do-you-want?"],
                    )},"or-something-crazy-do-you-want?":${$string(
                        input["or-something-crazy-do-you-want?"],
                    )}}`;
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ObjectLiteralProperty.SPOILERS,
    );
