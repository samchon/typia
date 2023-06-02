import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_assertParse_ObjectLiteralProperty = _test_assertParse(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input) =>
        ((input: string): typia.Primitive<ObjectLiteralProperty> => {
            const assert: any = (input: any): ObjectLiteralProperty => {
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
                const $guard: any = (typia.assertParse as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectLiteralProperty => {
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
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    ObjectLiteralProperty.SPOILERS,
);
