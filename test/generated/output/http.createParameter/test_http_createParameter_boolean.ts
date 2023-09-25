import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_createParameter_boolean = () => {
    const decoder = (input: string): boolean => {
        const $boolean = (typia.http.createParameter as any).boolean;
        const assert = (input: any): boolean => {
            const __is = (input: any): input is boolean => {
                return "boolean" === typeof input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is boolean => {
                    const $guard = (typia.http.createParameter as any).guard;
                    return (
                        "boolean" === typeof input ||
                        $guard(true, {
                            path: _path + "",
                            expected: "boolean",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const value = $boolean(input);
        return assert(value);
    };
    const value: boolean = decoder("false");
    TestValidator.equals("parameter<boolean>(boolean)")(value)(false);
    TestValidator.error("parameter<boolean>(null)")(() => decoder("null"));
    TestValidator.error("parameter<boolean>(string)")(() => decoder("one"));
    TestValidator.error("parameter<boolean>(number)")(() =>
        ((input: string): number => {
            const $number = (typia.http.parameter as any).number;
            const assert = (input: any): number => {
                const __is = (input: any): input is number => {
                    return "number" === typeof input && !Number.isNaN(input);
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is number => {
                        const $guard = (typia.http.parameter as any).guard;
                        return (
                            ("number" === typeof input &&
                                !Number.isNaN(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "number",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const value = $number(input);
            return assert(value);
        })("3.14"),
    );
};
