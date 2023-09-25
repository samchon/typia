import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_string_nullable = () => {
    const value: string | null = ((input: string): string | null => {
        const $string = (typia.http.parameter as any).string;
        const assert = (input: any): string | null => {
            const __is = (input: any): input is string | null => {
                return null === input || "string" === typeof input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is string | null => {
                    const $guard = (typia.http.parameter as any).guard;
                    return (
                        null === input ||
                        "string" === typeof input ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(null | string)",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $string(input);
        return assert(value);
    })("something");
    TestValidator.equals("parameter<string | null>(string)")(value)(
        "something",
    );
    TestValidator.equals("parameter<string | null>(null)")(
        ((input: string): string | null => {
            const $string = (typia.http.parameter as any).string;
            const assert = (input: any): string | null => {
                const __is = (input: any): input is string | null => {
                    return null === input || "string" === typeof input;
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is string | null => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            null === input ||
                            "string" === typeof input ||
                            $guard(true, {
                                path: _path + "",
                                expected: "(null | string)",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $string(input);
            return assert(value);
        })("null"),
    );
};
