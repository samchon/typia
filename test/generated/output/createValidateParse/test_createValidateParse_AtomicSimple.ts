import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_createValidateParse_AtomicSimple = _test_validateParse(
    "AtomicSimple",
    AtomicSimple.generate,
    (input: string): typia.IValidation<typia.Primitive<AtomicSimple>> => {
        const validate = (input: any): typia.IValidation<AtomicSimple> => {
            const __is = (input: any): input is AtomicSimple => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is AtomicSimple => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "[boolean, number, string]",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "[boolean, number, string]",
                                    value: input,
                                })) &&
                            [
                                "boolean" === typeof input[0] ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "boolean",
                                        value: input[0],
                                    }),
                                ("number" === typeof input[1] &&
                                    Number.isFinite(input[1])) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "number",
                                        value: input[1],
                                    }),
                                "string" === typeof input[2] ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "string",
                                        value: input[2],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "[boolean, number, string]",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        input = JSON.parse(input);
        const output = validate(input);
        return output as any;
    },
    AtomicSimple.SPOILERS,
);
