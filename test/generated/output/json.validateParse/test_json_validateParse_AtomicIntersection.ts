import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_validateParse_AtomicIntersection =
    _test_json_validateParse(
        "AtomicIntersection",
        AtomicIntersection.generate,
        (input) =>
            ((
                input: string,
            ): typia.IValidation<typia.Primitive<AtomicIntersection>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<AtomicIntersection> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is AtomicIntersection => {
                        return (
                            Array.isArray(input) &&
                            input.length === 3 &&
                            "boolean" === typeof input[0] &&
                            "number" === typeof input[1] &&
                            Number.isFinite(input[1]) &&
                            "string" === typeof input[2]
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.json.validateParse as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is AtomicIntersection => {
                            return (
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "AtomicIntersection",
                                        value: input,
                                    })) &&
                                    (input.length === 3 ||
                                        $report(true, {
                                            path: _path + "",
                                            expected:
                                                "[boolean, number, string]",
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
                                    expected: "AtomicIntersection",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    }
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
            })(input),
        AtomicIntersection.SPOILERS,
    );
