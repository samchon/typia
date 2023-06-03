import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_validateParse_ConstantAtomicSimple = _test_validateParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ConstantAtomicSimple>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ConstantAtomicSimple> => {
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
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
                if (false === __is(input))
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
    ConstantAtomicSimple.SPOILERS,
);
