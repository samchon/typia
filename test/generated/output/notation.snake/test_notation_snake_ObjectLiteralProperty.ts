import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_notation_validateSnake_ObjectLiteralProperty =
    _test_notation_validateGeneral(
        "ObjectLiteralProperty",
    )<ObjectLiteralProperty>(ObjectLiteralProperty)<
        typia.SnakeCase<ObjectLiteralProperty>
    >({
        convert: (input) =>
            ((
                input: any,
            ): typia.IValidation<typia.SnakeCase<ObjectLiteralProperty>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectLiteralProperty> => {
                    const errors = [] as any[];
                    const __is = (
                        input: any,
                    ): input is ObjectLiteralProperty => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" ===
                                typeof (input as any)[
                                    "something-interesting-do-you-want?"
                                ] &&
                            "string" ===
                                typeof (input as any)[
                                    "or-something-crazy-do-you-want?"
                                ]
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.notations.validateSnake as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectLiteralProperty => {
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
                    }
                    const success = 0 === errors.length;
                    return {
                        success,
                        errors,
                        data: success ? input : undefined,
                    } as any;
                };
                const general = (
                    input: ObjectLiteralProperty,
                ): typia.SnakeCase<ObjectLiteralProperty> => {
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
                const output = validate(input) as any;
                if (output.success) output.data = general(input);
                return output;
            })(input),
        assert: (input: any): typia.SnakeCase<ObjectLiteralProperty> => {
            const __is = (
                input: any,
            ): input is typia.SnakeCase<ObjectLiteralProperty> => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" ===
                        typeof (input as any)[
                            "something-interesting-do-you-want?"
                        ] &&
                    "string" ===
                        typeof (input as any)["or-something-crazy-do-you-want?"]
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.SnakeCase<ObjectLiteralProperty> => {
                    const $guard = (typia.createAssert as any).guard;
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
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectLiteralProperty.ISomething",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectLiteralProperty.ISomething",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
