import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createValidateClone_ObjectLiteralProperty =
    _test_validateClone(
        "ObjectLiteralProperty",
        ObjectLiteralProperty.generate,
        (
            input: any,
        ): typia.IValidation<typia.Primitive<ObjectLiteralProperty>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectLiteralProperty> => {
                const __is: any = (
                    input: any,
                ): input is ObjectLiteralProperty => {
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
                const errors: any = [] as any[];
                const $report: any = (typia.createValidateClone as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectLiteralProperty => {
                        const $vo0: any = (
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
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone: any = (
                input: ObjectLiteralProperty,
            ): typia.Primitive<ObjectLiteralProperty> => {
                const $co0: any = (input: any): any => ({
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
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        },
        ObjectLiteralProperty.SPOILERS,
    );
