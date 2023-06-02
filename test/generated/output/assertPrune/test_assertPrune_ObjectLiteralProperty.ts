import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_assertPrune_ObjectLiteralProperty = _test_assertPrune(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: any): ObjectLiteralProperty.ISomething => {
            const assert: any = (
                input: any,
            ): ObjectLiteralProperty.ISomething => {
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
                const $guard: any = (typia.assertPrune as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectLiteralProperty.ISomething => {
                        const $ao0: any = (
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
                                typeof input[
                                    "or-something-crazy-do-you-want?"
                                ] ||
                                $guard(_exceptionable, {
                                    path:
                                        _path +
                                        '["or-something-crazy-do-you-want?"]',
                                    expected: "string",
                                    value: input[
                                        "or-something-crazy-do-you-want?"
                                    ],
                                }));
                        return (
                            (("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "ObjectLiteralProperty.ISomething",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
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
            assert(input);
            prune(input);
            return input;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
