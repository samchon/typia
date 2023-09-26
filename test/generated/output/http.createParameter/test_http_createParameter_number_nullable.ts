import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_number_nullable = () => {
    const decoder = (input: string): number | null => {
        const $number = (typia.http.createParameter as any).number;
        const assert = (input: any): number | null => {
            const __is = (input: any): input is number | null => {
                return (
                    null === input ||
                    ("number" === typeof input && !Number.isNaN(input))
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is number | null => {
                    const $guard = (typia.http.createParameter as any).guard;
                    return (
                        null === input ||
                        ("number" === typeof input && !Number.isNaN(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "(null | number)",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $number(input);
        return assert(value);
    };
    const value: number | null = decoder("3.14");
    TestValidator.equals("parameter<number | null>(number)")(value)(3.14);
    TestValidator.equals("parameter<number | null>(null)")(decoder("null"));
    TestValidator.error("parameter<number | null>(string)")(() =>
        decoder("one"),
    );
    TestValidator.error("parameter<number | null>(boolean)")(() =>
        decoder("false"),
    );
};
