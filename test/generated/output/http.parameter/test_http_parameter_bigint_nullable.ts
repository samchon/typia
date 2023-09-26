import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_bigint_nullable = () => {
    const value: bigint | null = ((input: string): bigint | null => {
        const $bigint = (typia.http.parameter as any).bigint;
        const assert = (input: any): bigint | null => {
            const __is = (input: any): input is bigint | null => {
                return null === input || "bigint" === typeof input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is bigint | null => {
                    const $guard = (typia.http.parameter as any).guard;
                    return (
                        null === input ||
                        "bigint" === typeof input ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(bigint | null)",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $bigint(input);
        return assert(value);
    })("270");
    TestValidator.equals("parameter<bigint>(bigint)")(value)(270n);
    TestValidator.equals("parameter<bigint | null>(null)")(
        ((input: string): bigint | null => {
            const $bigint = (typia.http.parameter as any).bigint;
            const assert = (input: any): bigint | null => {
                const __is = (input: any): input is bigint | null => {
                    return null === input || "bigint" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is bigint | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "bigint" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(bigint | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $bigint(input);
            return assert(value);
        })("null"),
    );
    TestValidator.error("parameter<bigint>(string)")(() =>
        ((input: string): bigint | null => {
            const $bigint = (typia.http.parameter as any).bigint;
            const assert = (input: any): bigint | null => {
                const __is = (input: any): input is bigint | null => {
                    return null === input || "bigint" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is bigint | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "bigint" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(bigint | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $bigint(input);
            return assert(value);
        })("one"),
    );
    TestValidator.error("parameter<bigint>(boolean)")(() =>
        ((input: string): bigint | null => {
            const $bigint = (typia.http.parameter as any).bigint;
            const assert = (input: any): bigint | null => {
                const __is = (input: any): input is bigint | null => {
                    return null === input || "bigint" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is bigint | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "bigint" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(bigint | null)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $bigint(input);
            return assert(value);
        })("false"),
    );
};
