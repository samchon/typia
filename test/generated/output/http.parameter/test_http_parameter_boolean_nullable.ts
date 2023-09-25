import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_boolean_nullable = () => {
    const value: boolean | null = ((input: string): boolean | null => {
        const $boolean = (typia.http.parameter as any).boolean;
        const assert = (input: any): boolean | null => {
            const __is = (input: any): input is boolean | null => {
                return null === input || "boolean" === typeof input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is boolean | null => {
                    const $guard = (typia.http.parameter as any).guard;
                    return (
                        null === input ||
                        "boolean" === typeof input ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(boolean | null)",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $boolean(input);
        return assert(value);
    })("false");
    TestValidator.equals("parameter<boolean | null>(boolean)")(value)(false);
    TestValidator.equals("parameter<boolean | null>(null)")(
        ((input: string): boolean | null => {
            const $boolean = (typia.http.parameter as any).boolean;
            const assert = (input: any): boolean | null => {
                const __is = (input: any): input is boolean | null => {
                    return null === input || "boolean" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is boolean | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "boolean" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(boolean | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $boolean(input);
            return assert(value);
        })("null"),
    );
    TestValidator.error("parameter<boolean | null>(string)")(() =>
        ((input: string): boolean | null => {
            const $boolean = (typia.http.parameter as any).boolean;
            const assert = (input: any): boolean | null => {
                const __is = (input: any): input is boolean | null => {
                    return null === input || "boolean" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is boolean | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "boolean" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(boolean | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $boolean(input);
            return assert(value);
        })("one"),
    );
    TestValidator.error("parameter<boolean | null>(number)")(() =>
        ((input: string): boolean | null => {
            const $boolean = (typia.http.parameter as any).boolean;
            const assert = (input: any): boolean | null => {
                const __is = (input: any): input is boolean | null => {
                    return null === input || "boolean" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is boolean | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "boolean" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(boolean | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $boolean(input);
            return assert(value);
        })("3.14"),
    );
};
