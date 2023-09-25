import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_bigint_nullable = () => {
    const decoder = (input: string): bigint | null => {
        const $bigint = (typia.http.createParameter as any).bigint;
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
                    const $guard = (typia.http.createParameter as any).guard;
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
    };
    const value: bigint | null = decoder("270");
    TestValidator.equals("parameter<bigint>(bigint)")(value)(270n);
    TestValidator.equals("parameter<bigint | null>(null)")(decoder("null"));
    TestValidator.error("parameter<bigint>(string)")(() => decoder("one"));
    TestValidator.error("parameter<bigint>(boolean)")(() => decoder("false"));
};
