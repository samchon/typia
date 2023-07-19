import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_validateStringify_ConstantAtomicSimple =
    _test_json_validateStringify<ConstantAtomicSimple>(ConstantAtomicSimple)(
        (input) =>
            ((input: [false, true, 2, "three"]): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<[false, true, 2, "three"]> => {
                    const errors = [] as any[];
                    const __is = (
                        input: any,
                    ): input is [false, true, 2, "three"] => {
                        return (
                            Array.isArray(input) &&
                            input.length === 4 &&
                            false === input[0] &&
                            true === input[1] &&
                            2 === input[2] &&
                            "three" === input[3]
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.json.validateStringify as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is [false, true, 2, "three"] => {
                            return (
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ConstantAtomicSimple",
                                        value: input,
                                    })) &&
                                    (input.length === 4 ||
                                        $report(true, {
                                            path: _path + "",
                                            expected:
                                                '[false, true, 2, "three"]',
                                            value: input,
                                        })) &&
                                    [
                                        false === input[0] ||
                                            $report(true, {
                                                path: _path + "[0]",
                                                expected: "false",
                                                value: input[0],
                                            }),
                                        true === input[1] ||
                                            $report(true, {
                                                path: _path + "[1]",
                                                expected: "true",
                                                value: input[1],
                                            }),
                                        2 === input[2] ||
                                            $report(true, {
                                                path: _path + "[2]",
                                                expected: "2",
                                                value: input[2],
                                            }),
                                        "three" === input[3] ||
                                            $report(true, {
                                                path: _path + "[3]",
                                                expected: '"three"',
                                                value: input[3],
                                            }),
                                    ].every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantAtomicSimple",
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
                const stringify = (
                    input: [false, true, 2, "three"],
                ): string => {
                    const $number = (typia.json.validateStringify as any)
                        .number;
                    const $string = (typia.json.validateStringify as any)
                        .string;
                    const $throws = (typia.json.validateStringify as any)
                        .throws;
                    return `[${input[0]},${input[1]},${$number(
                        input[2],
                    )},${(() => {
                        if ("string" === typeof input[3])
                            return $string(input[3]);
                        if ("string" === typeof input[3])
                            return '"' + input[3] + '"';
                        $throws({
                            expected: '"three"',
                            value: input[3],
                        });
                    })()}]`;
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
    );
