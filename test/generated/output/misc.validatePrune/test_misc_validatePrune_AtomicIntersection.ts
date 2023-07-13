import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_misc_validatePrune_AtomicIntersection =
    _test_misc_validatePrune(
        "AtomicIntersection",
        AtomicIntersection.generate,
        (input) =>
            ((
                input: any,
            ): typia.IValidation<
                [
                    AtomicIntersection.Wrapper<boolean>,
                    AtomicIntersection.Wrapper<number>,
                    AtomicIntersection.Wrapper<string>,
                ]
            > => {
                const validate = (
                    input: any,
                ): typia.IValidation<
                    [
                        AtomicIntersection.Wrapper<boolean>,
                        AtomicIntersection.Wrapper<number>,
                        AtomicIntersection.Wrapper<string>,
                    ]
                > => {
                    const errors = [] as any[];
                    const __is = (
                        input: any,
                    ): input is [
                        AtomicIntersection.Wrapper<boolean>,
                        AtomicIntersection.Wrapper<number>,
                        AtomicIntersection.Wrapper<string>,
                    ] => {
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
                            typia.misc.validatePrune as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is [
                            AtomicIntersection.Wrapper<boolean>,
                            AtomicIntersection.Wrapper<number>,
                            AtomicIntersection.Wrapper<string>,
                        ] => {
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
                const prune = (
                    input: [
                        AtomicIntersection.Wrapper<boolean>,
                        AtomicIntersection.Wrapper<number>,
                        AtomicIntersection.Wrapper<string>,
                    ],
                ): void => {};
                const output = validate(input);
                if (output.success) prune(input);
                return output;
            })(input),
        AtomicIntersection.SPOILERS,
    );
