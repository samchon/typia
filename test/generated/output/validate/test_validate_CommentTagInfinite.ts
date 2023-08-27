import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_validate_CommentTagInfinite = _test_validate(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)((input) =>
    ((input: any): typia.IValidation<CommentTagInfinite> => {
        const errors = [] as any[];
        const __is = (input: any): input is CommentTagInfinite => {
            return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).value &&
                Number.isFinite((input as any).value) &&
                "number" === typeof (input as any).ranged &&
                0 <= (input as any).ranged &&
                (input as any).ranged <= 100 &&
                "number" === typeof (input as any).minimum &&
                Number.isFinite((input as any).minimum) &&
                0 <= (input as any).minimum &&
                "number" === typeof (input as any).maximum &&
                Number.isFinite((input as any).maximum) &&
                (input as any).maximum <= 100 &&
                "number" === typeof (input as any).multipleOf &&
                (input as any).multipleOf % 3 === 0 &&
                "number" === typeof (input as any).typed &&
                Math.floor((input as any).typed) === (input as any).typed &&
                -2147483648 <= (input as any).typed &&
                (input as any).typed <= 2147483647
            );
        };
        if (false === __is(input)) {
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is CommentTagInfinite => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            }),
                        ("number" === typeof input.ranged &&
                            (0 <= input.ranged ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number & Minimum<0>",
                                    value: input.ranged,
                                })) &&
                            (input.ranged <= 100 ||
                                $report(_exceptionable, {
                                    path: _path + ".ranged",
                                    expected: "number & Maximum<100>",
                                    value: input.ranged,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".ranged",
                                expected:
                                    "(number & Minimum<0> & Maximum<100>)",
                                value: input.ranged,
                            }),
                        ("number" === typeof input.minimum &&
                            (Number.isFinite(input.minimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number",
                                    value: input.minimum,
                                })) &&
                            (0 <= input.minimum ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number & Minimum<0>",
                                    value: input.minimum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "(number & Minimum<0>)",
                                value: input.minimum,
                            }),
                        ("number" === typeof input.maximum &&
                            (Number.isFinite(input.maximum) ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number",
                                    value: input.maximum,
                                })) &&
                            (input.maximum <= 100 ||
                                $report(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "number & Maximum<100>",
                                    value: input.maximum,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "(number & Maximum<100>)",
                                value: input.maximum,
                            }),
                        ("number" === typeof input.multipleOf &&
                            (input.multipleOf % 3 === 0 ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number & MultipleOf<3>",
                                    value: input.multipleOf,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "(number & MultipleOf<3>)",
                                value: input.multipleOf,
                            }),
                        ("number" === typeof input.typed &&
                            ((Math.floor(input.typed) === input.typed &&
                                -2147483648 <= input.typed &&
                                input.typed <= 2147483647) ||
                                $report(_exceptionable, {
                                    path: _path + ".typed",
                                    expected: "number & Type<int32>",
                                    value: input.typed,
                                }))) ||
                            $report(_exceptionable, {
                                path: _path + ".typed",
                                expected: "(number & Type<int32>)",
                                value: input.typed,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "CommentTagInfinite",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "CommentTagInfinite",
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
    })(input),
);
