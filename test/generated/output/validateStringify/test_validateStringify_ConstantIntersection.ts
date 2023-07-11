import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_validateStringify_ConstantIntersection =
    _test_validateStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        (input) =>
            ((
                input: [
                    ConstantIntersection.Wrapper<false>,
                    ConstantIntersection.Wrapper<1>,
                    ConstantIntersection.Wrapper<"two">,
                ],
            ): typia.IValidation<string> => {
                const validate = (
                    input: any,
                ): typia.IValidation<
                    [
                        ConstantIntersection.Wrapper<false>,
                        ConstantIntersection.Wrapper<1>,
                        ConstantIntersection.Wrapper<"two">,
                    ]
                > => {
                    const errors = [] as any[];
                    const __is = (
                        input: any,
                    ): input is [
                        ConstantIntersection.Wrapper<false>,
                        ConstantIntersection.Wrapper<1>,
                        ConstantIntersection.Wrapper<"two">,
                    ] => {
                        return (
                            Array.isArray(input) &&
                            input.length === 3 &&
                            false === input[0] &&
                            1 === input[1] &&
                            "two" === input[2]
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (typia.validateStringify as any).report(
                            errors,
                        );
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is [
                            ConstantIntersection.Wrapper<false>,
                            ConstantIntersection.Wrapper<1>,
                            ConstantIntersection.Wrapper<"two">,
                        ] => {
                            return (
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ConstantIntersection",
                                        value: input,
                                    })) &&
                                    (input.length === 3 ||
                                        $report(true, {
                                            path: _path + "",
                                            expected: '[false, 1, "two"]',
                                            value: input,
                                        })) &&
                                    [
                                        false === input[0] ||
                                            $report(true, {
                                                path: _path + "[0]",
                                                expected: "false",
                                                value: input[0],
                                            }),
                                        1 === input[1] ||
                                            $report(true, {
                                                path: _path + "[1]",
                                                expected: "1",
                                                value: input[1],
                                            }),
                                        "two" === input[2] ||
                                            $report(true, {
                                                path: _path + "[2]",
                                                expected: '"two"',
                                                value: input[2],
                                            }),
                                    ].every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantIntersection",
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
                    input: [
                        ConstantIntersection.Wrapper<false>,
                        ConstantIntersection.Wrapper<1>,
                        ConstantIntersection.Wrapper<"two">,
                    ],
                ): string => {
                    const $number = (typia.validateStringify as any).number;
                    const $string = (typia.validateStringify as any).string;
                    const $throws = (typia.validateStringify as any).throws;
                    return `[${input[0]},${$number(input[1])},${(() => {
                        if ("string" === typeof input[2])
                            return $string(input[2]);
                        if ("string" === typeof input[2])
                            return '"' + input[2] + '"';
                        $throws({
                            expected: '"two"',
                            value: input[2],
                        });
                    })()}]`;
                };
                const output = validate(input) as any;
                if (output.success) output.data = stringify(input);
                return output;
            })(input),
        ConstantIntersection.SPOILERS,
    );
