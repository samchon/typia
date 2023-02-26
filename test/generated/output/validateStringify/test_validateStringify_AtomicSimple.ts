import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_validateStringify_AtomicSimple = _test_validateStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) =>
        ((input: [boolean, number, string]): typia.IValidation<string> => {
            const validate = (input: any): typia.IValidation<AtomicSimple> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
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
            const stringify = (input: AtomicSimple): string => {
                const $number = (typia.validateStringify as any).number;
                const $string = (typia.validateStringify as any).string;
                return `[${input[0]},${$number(input[1])},${$string(
                    input[2],
                )}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    AtomicSimple.SPOILERS,
);
