import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_validatePrune_ConstantIntersection = _test_validatePrune(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            [
                ConstantIntersection.Wrapper<false>,
                ConstantIntersection.Wrapper<1>,
                ConstantIntersection.Wrapper<"two">,
            ]
        > => {
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
                const $report = (typia.validatePrune as any).report(errors);
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
                if (false === __is(input))
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
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (
                input: [
                    ConstantIntersection.Wrapper<false>,
                    ConstantIntersection.Wrapper<1>,
                    ConstantIntersection.Wrapper<"two">,
                ],
            ): void => {};
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ConstantIntersection.SPOILERS,
);
