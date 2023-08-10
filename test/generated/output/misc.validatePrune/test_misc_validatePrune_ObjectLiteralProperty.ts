import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_misc_validatePrune_ObjectLiteralProperty =
    _test_misc_validatePrune<ObjectLiteralProperty>(ObjectLiteralProperty)(
        (input) =>
            ((input: any): typia.IValidation<ObjectLiteralProperty> => {
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
                            typia.misc.validatePrune as any
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
                const prune = (input: ObjectLiteralProperty): void => {
                    const $po0 = (input: any): any => {
                        for (const key of Object.keys(input)) {
                            if (
                                "something-interesting-do-you-want?" === key ||
                                "or-something-crazy-do-you-want?" === key
                            )
                                continue;
                            delete input[key];
                        }
                    };
                    if ("object" === typeof input && null !== input)
                        $po0(input);
                };
                const output = validate(input);
                if (output.success) prune(input);
                return output;
            })(input),
    );
