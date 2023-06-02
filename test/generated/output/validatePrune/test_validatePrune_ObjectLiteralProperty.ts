import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_validatePrune_ObjectLiteralProperty = _test_validatePrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: any): typia.IValidation<ObjectLiteralProperty.ISomething> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectLiteralProperty.ISomething> => {
                const __is: any = (
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
                const errors: any = [] as any[];
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectLiteralProperty.ISomething => {
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
            const prune: any = (
                input: ObjectLiteralProperty.ISomething,
            ): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if (
                            "something-interesting-do-you-want?" === key ||
                            "or-something-crazy-do-you-want?" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
