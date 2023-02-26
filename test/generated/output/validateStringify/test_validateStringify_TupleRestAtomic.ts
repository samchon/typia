import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_validateStringify_TupleRestAtomic = _test_validateStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: [boolean, number, ...string[]]): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<TupleRestAtomic> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TupleRestAtomic => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "[boolean, number, ...string]",
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
                            ].every((flag: boolean) => flag) &&
                            (((Array.isArray(input.slice(2)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Array<string>",
                                    value: input.slice(2),
                                })) &&
                                input
                                    .slice(2)
                                    .map(
                                        (elem: any, _index1: number) =>
                                            "string" === typeof elem ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    (2 + _index1) +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Array<string>",
                                    value: input.slice(2),
                                }))) ||
                        $report(true, {
                            path: _path + "",
                            expected: "[boolean, number, ...string]",
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
            const stringify = (input: TupleRestAtomic): string => {
                const $number = (typia.validateStringify as any).number;
                const $string = (typia.validateStringify as any).string;
                const $rest = (typia.validateStringify as any).rest;
                return `[${input[0]},${$number(input[1])}${$rest(
                    `[${input
                        .slice(2)
                        .map((elem: any) => $string(elem))
                        .join(",")}]`,
                )}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    TupleRestAtomic.SPOILERS,
);
