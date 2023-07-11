import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createValidateParse_ObjectLiteralProperty =
    _test_validateParse(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (
            input: string,
        ): typia.IValidation<typia.Primitive<ObjectLiteralProperty>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectLiteralProperty> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectLiteralProperty => {
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
                    const $report = (typia.createValidateParse as any).report(
                        errors,
                    );
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
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "ObjectLiteralProperty.ISomething",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectLiteralProperty.ISomething",
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
            input = JSON.parse(input);
            const output = validate(input);
            return output as any;
        },
        ObjectLiteralProperty.SPOILERS,
    );
