import typia from "../../../../src";
import { TestValidator } from "../../../helpers/TestValidator";

export const test_http_parameter_bigint = () => {
    const value: bigint = ((input: string): bigint => {
        const $bigint = (typia.http.parameter as any).bigint;
        const assert = (input: any): bigint => {
            const __is = (input: any): input is bigint => {
                return "bigint" === typeof input;
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is bigint => {
                    const $guard = (typia.http.parameter as any).guard;
                    return (
                        "bigint" === typeof input ||
                        $guard(true, {
                            path: _path + "",
                            expected: "bigint",
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
    TestValidator.error("parameter<bigint>(null)")(() =>
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
        })("null"),
    );
    TestValidator.error("parameter<bigint>(string)")(() =>
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
        })("one"),
    );
    TestValidator.error("parameter<bigint>(boolean)")(() =>
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
        })("false"),
    );
};
