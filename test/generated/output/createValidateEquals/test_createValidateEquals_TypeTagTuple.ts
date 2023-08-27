import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_validateEquals_TypeTagTuple = _test_validateEquals(
    "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input: any): typia.IValidation<TypeTagTuple> => {
    const errors = [] as any[];
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is TypeTagTuple => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.tuple) &&
            input.tuple.length === 4 &&
            "string" === typeof input.tuple[0] &&
            3 <= input.tuple[0].length &&
            input.tuple[0].length <= 7 &&
            "number" === typeof input.tuple[1] &&
            3 <= input.tuple[1] &&
            input.tuple[1] <= 7 &&
            Array.isArray(input.tuple[2]) &&
            3 <= input.tuple[2].length &&
            input.tuple[2].length <= 7 &&
            input.tuple[2].every(
                (elem: any, _index1: number) =>
                    "string" === typeof elem &&
                    1 <= elem.length &&
                    elem.length <= 2,
            ) &&
            Array.isArray(input.tuple[3]) &&
            3 <= input.tuple[3].length &&
            input.tuple[3].length <= 7 &&
            input.tuple[3].every(
                (elem: any, _index2: number) =>
                    "number" === typeof elem && 1 <= elem && elem <= 2,
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["tuple"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
        const $report = (typia.createValidateEquals as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TypeTagTuple => {
            const $join = (typia.createValidateEquals as any).join;
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((Array.isArray(input.tuple) ||
                        $report(_exceptionable, {
                            path: _path + ".tuple",
                            expected:
                                "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
                            value: input.tuple,
                        })) &&
                        (input.tuple.length === 4 ||
                            $report(_exceptionable, {
                                path: _path + ".tuple",
                                expected:
                                    "[(string & MinLength<3> & MaxLength<7>), (number & Minimum<3> & Maximum<7>), (Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>), (Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)]",
                                value: input.tuple,
                            })) &&
                        [
                            ("string" === typeof input.tuple[0] &&
                                (3 <= input.tuple[0].length ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[0]",
                                        expected: "string & MinLength<3>",
                                        value: input.tuple[0],
                                    })) &&
                                (input.tuple[0].length <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[0]",
                                        expected: "string & MaxLength<7>",
                                        value: input.tuple[0],
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[0]",
                                    expected:
                                        "(string & MinLength<3> & MaxLength<7>)",
                                    value: input.tuple[0],
                                }),
                            ("number" === typeof input.tuple[1] &&
                                (3 <= input.tuple[1] ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[1]",
                                        expected: "number & Minimum<3>",
                                        value: input.tuple[1],
                                    })) &&
                                (input.tuple[1] <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[1]",
                                        expected: "number & Maximum<7>",
                                        value: input.tuple[1],
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[1]",
                                    expected:
                                        "(number & Minimum<3> & Maximum<7>)",
                                    value: input.tuple[1],
                                }),
                            ((Array.isArray(input.tuple[2]) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[2]",
                                    expected:
                                        "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                                    value: input.tuple[2],
                                })) &&
                                (3 <= input.tuple[2].length ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<> & MinItems<3>",
                                        value: input.tuple[2],
                                    })) &&
                                (input.tuple[2].length <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[2]",
                                        expected: "Array<> & MaxItems<7>",
                                        value: input.tuple[2],
                                    })) &&
                                input.tuple[2]
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ("string" === typeof elem &&
                                                (1 <= elem.length ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".tuple[2][" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "string & MinLength<1>",
                                                        value: elem,
                                                    })) &&
                                                (elem.length <= 2 ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".tuple[2][" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "string & MaxLength<2>",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".tuple[2][" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "(string & MinLength<1> & MaxLength<2>)",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[2]",
                                    expected:
                                        "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                                    value: input.tuple[2],
                                }),
                            ((Array.isArray(input.tuple[3]) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[3]",
                                    expected:
                                        "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                                    value: input.tuple[3],
                                })) &&
                                (3 <= input.tuple[3].length ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<> & MinItems<3>",
                                        value: input.tuple[3],
                                    })) &&
                                (input.tuple[3].length <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".tuple[3]",
                                        expected: "Array<> & MaxItems<7>",
                                        value: input.tuple[3],
                                    })) &&
                                input.tuple[3]
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ("number" === typeof elem &&
                                                (1 <= elem ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".tuple[3][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number & Minimum<1>",
                                                        value: elem,
                                                    })) &&
                                                (elem <= 2 ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".tuple[3][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "number & Maximum<2>",
                                                        value: elem,
                                                    }))) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".tuple[3][" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "(number & Minimum<1> & Maximum<2>)",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".tuple[3]",
                                    expected:
                                        "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                                    value: input.tuple[3],
                                }),
                        ].every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".tuple",
                            expected:
                                "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
                            value: input.tuple,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key: any) => {
                                if (["tuple"].some((prop: any) => key === prop))
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TypeTagTuple",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "TypeTagTuple",
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
});
