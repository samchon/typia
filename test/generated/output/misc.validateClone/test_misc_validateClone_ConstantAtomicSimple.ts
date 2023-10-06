import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_validateClone_ConstantAtomicSimple =
    _test_misc_validateClone("ConstantAtomicSimple")<ConstantAtomicSimple>(
        ConstantAtomicSimple,
    )((input) =>
        ((
            input: any,
        ): typia.IValidation<typia.Resolved<ConstantAtomicSimple>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ConstantAtomicSimple> => {
                const errors = [] as any[];
                const __is = (input: any): input is ConstantAtomicSimple => {
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
                    const $report = (typia.misc.validateClone as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantAtomicSimple => {
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
                                        expected: '[false, true, 2, "three"]',
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
            const clone = (
                input: ConstantAtomicSimple,
            ): typia.Resolved<ConstantAtomicSimple> => {
                return Array.isArray(input) &&
                    input.length === 4 &&
                    false === input[0] &&
                    true === input[1] &&
                    2 === input[2] &&
                    "three" === input[3]
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          input[2] as any,
                          input[3] as any,
                      ] as any)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    );
