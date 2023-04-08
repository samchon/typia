import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_validateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<TupleRestArray>> => {
            const validate = (
                input: any,
            ): typia.IValidation<TupleRestArray> => {
                const __is = (input: any): input is TupleRestArray => {
                    return (
                        Array.isArray(input) &&
                        "boolean" === typeof input[0] &&
                        "number" === typeof input[1] &&
                        Number.isFinite(input[1]) &&
                        Array.isArray(input.slice(2)) &&
                        input
                            .slice(2)
                            .every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    elem.every(
                                        (elem: any) => "string" === typeof elem,
                                    ),
                            )
                    );
                };
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TupleRestArray => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[boolean, number, ...Array<string>]",
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
                                        expected: "Array<Array<string>>",
                                        value: input.slice(2),
                                    })) &&
                                    input
                                        .slice(2)
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((Array.isArray(elem) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            (2 + _index1) +
                                                            "]",
                                                        expected:
                                                            "Array<string>",
                                                        value: elem,
                                                    })) &&
                                                    elem
                                                        .map(
                                                            (
                                                                elem: any,
                                                                _index2: number,
                                                            ) =>
                                                                "string" ===
                                                                    typeof elem ||
                                                                $report(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        (2 +
                                                                            _index1) +
                                                                        "][" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        "string",
                                                                    value: elem,
                                                                }),
                                                        )
                                                        .every(
                                                            (flag: boolean) =>
                                                                flag,
                                                        )) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        (2 + _index1) +
                                                        "]",
                                                    expected: "Array<string>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "Array<Array<string>>",
                                        value: input.slice(2),
                                    }))) ||
                            $report(true, {
                                path: _path + "",
                                expected: "[boolean, number, ...Array<string>]",
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
            return output;
        })(input),
    TupleRestArray.SPOILERS,
);
