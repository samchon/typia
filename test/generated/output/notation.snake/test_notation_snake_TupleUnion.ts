import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_notation_validateSnake_TupleUnion =
    _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
        typia.SnakeCase<TupleUnion>
    >({
        convert: (input) =>
            ((input: any): typia.IValidation<typia.SnakeCase<TupleUnion>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<TupleUnion> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is TupleUnion => {
                        const $ip0 = (input: any) => {
                            const array = input;
                            const tuplePredicators = [
                                [
                                    (top: any[]): any =>
                                        top.length === 3 &&
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "string" === typeof top[1] &&
                                        "boolean" === typeof top[2],
                                    (entire: any[]): any =>
                                        entire.length === 3 &&
                                        "number" === typeof entire[0] &&
                                        Number.isFinite(entire[0]) &&
                                        "string" === typeof entire[1] &&
                                        "boolean" === typeof entire[2],
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        top.length === 2 &&
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.length === 2 &&
                                        "boolean" === typeof entire[0] &&
                                        "number" === typeof entire[1] &&
                                        Number.isFinite(entire[1]),
                                ] as const,
                                [
                                    (top: any[]): any => top.length === 0,
                                    (entire: any[]): any => entire.length === 0,
                                ] as const,
                            ];
                            for (const pred of tuplePredicators)
                                if (pred[0](array)) return pred[1](array);
                            return false;
                        };
                        return (
                            Array.isArray(input) &&
                            input.every(
                                (elem: any) =>
                                    Array.isArray(elem) &&
                                    ($ip0(elem) || false),
                            )
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.notations.validateSnake as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is TupleUnion => {
                            const $vp0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ) => {
                                const array = input;
                                const tuplePredicators = [
                                    [
                                        (top: any[]): any =>
                                            top.length === 3 &&
                                            [
                                                "number" === typeof top[0] &&
                                                    Number.isFinite(top[0]),
                                                "string" === typeof top[1],
                                                "boolean" === typeof top[2],
                                            ].every((flag: boolean) => flag),
                                        (entire: any[]): any =>
                                            (entire.length === 3 ||
                                                $report(_exceptionable, {
                                                    path: _path,
                                                    expected:
                                                        "[number, string, boolean]",
                                                    value: entire,
                                                })) &&
                                            [
                                                ("number" ===
                                                    typeof entire[0] &&
                                                    Number.isFinite(
                                                        entire[0],
                                                    )) ||
                                                    $report(_exceptionable, {
                                                        path: _path + "[0]",
                                                        expected: "number",
                                                        value: entire[0],
                                                    }),
                                                "string" === typeof entire[1] ||
                                                    $report(_exceptionable, {
                                                        path: _path + "[1]",
                                                        expected: "string",
                                                        value: entire[1],
                                                    }),
                                                "boolean" ===
                                                    typeof entire[2] ||
                                                    $report(_exceptionable, {
                                                        path: _path + "[2]",
                                                        expected: "boolean",
                                                        value: entire[2],
                                                    }),
                                            ].every((flag: boolean) => flag),
                                    ] as const,
                                    [
                                        (top: any[]): any =>
                                            top.length === 2 &&
                                            [
                                                "boolean" === typeof top[0],
                                                "number" === typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                            ].every((flag: boolean) => flag),
                                        (entire: any[]): any =>
                                            (entire.length === 2 ||
                                                $report(_exceptionable, {
                                                    path: _path,
                                                    expected:
                                                        "[boolean, number]",
                                                    value: entire,
                                                })) &&
                                            [
                                                "boolean" ===
                                                    typeof entire[0] ||
                                                    $report(_exceptionable, {
                                                        path: _path + "[0]",
                                                        expected: "boolean",
                                                        value: entire[0],
                                                    }),
                                                ("number" ===
                                                    typeof entire[1] &&
                                                    Number.isFinite(
                                                        entire[1],
                                                    )) ||
                                                    $report(_exceptionable, {
                                                        path: _path + "[1]",
                                                        expected: "number",
                                                        value: entire[1],
                                                    }),
                                            ].every((flag: boolean) => flag),
                                    ] as const,
                                    [
                                        (top: any[]): any =>
                                            top.length === 0 &&
                                            [].every((flag: boolean) => flag),
                                        (entire: any[]): any =>
                                            (entire.length === 0 ||
                                                $report(_exceptionable, {
                                                    path: _path,
                                                    expected: "[]",
                                                    value: entire,
                                                })) &&
                                            [].every((flag: boolean) => flag),
                                    ] as const,
                                ];
                                for (const pred of tuplePredicators)
                                    if (pred[0](array)) return pred[1](array);
                                return $report(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "([number, string, boolean] | [boolean, number] | [])",
                                    value: input,
                                });
                            };
                            return (
                                ((Array.isArray(input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "TupleUnion",
                                        value: input,
                                    })) &&
                                    input
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((Array.isArray(elem) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "([] | [boolean, number] | [number, string, boolean])",
                                                        value: elem,
                                                    })) &&
                                                    ($vp0(
                                                        elem,
                                                        _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    ) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "[number, string, boolean] | [boolean, number] | []",
                                                                value: elem,
                                                            },
                                                        ))) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "([] | [boolean, number] | [number, string, boolean])",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TupleUnion",
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
                const general = (
                    input: TupleUnion,
                ): typia.SnakeCase<TupleUnion> => {
                    const $cp0 = (input: any) =>
                        input.map((elem: any) =>
                            Array.isArray(elem) &&
                            elem.length === 3 &&
                            "number" === typeof elem[0] &&
                            "string" === typeof elem[1] &&
                            "boolean" === typeof elem[2]
                                ? ([
                                      elem[0] as any,
                                      elem[1] as any,
                                      elem[2] as any,
                                  ] as any)
                                : Array.isArray(elem) &&
                                  elem.length === 2 &&
                                  "boolean" === typeof elem[0] &&
                                  "number" === typeof elem[1]
                                ? ([elem[0] as any, elem[1] as any] as any)
                                : Array.isArray(elem) && elem.length === 0
                                ? ([] as any)
                                : (elem as any),
                        );
                    return Array.isArray(input) ? $cp0(input) : (input as any);
                };
                const output = validate(input) as any;
                if (output.success) output.data = general(input);
                return output;
            })(input),
        assert: (input: any): typia.SnakeCase<TupleUnion> => {
            const __is = (input: any): input is typia.SnakeCase<TupleUnion> => {
                const $ip0 = (input: any) => {
                    const array = input;
                    const tuplePredicators = [
                        [
                            (top: any[]): any =>
                                top.length === 3 &&
                                "number" === typeof top[0] &&
                                Number.isFinite(top[0]) &&
                                "string" === typeof top[1] &&
                                "boolean" === typeof top[2],
                            (entire: any[]): any =>
                                entire.length === 3 &&
                                "number" === typeof entire[0] &&
                                Number.isFinite(entire[0]) &&
                                "string" === typeof entire[1] &&
                                "boolean" === typeof entire[2],
                        ] as const,
                        [
                            (top: any[]): any =>
                                top.length === 2 &&
                                "boolean" === typeof top[0] &&
                                "number" === typeof top[1] &&
                                Number.isFinite(top[1]),
                            (entire: any[]): any =>
                                entire.length === 2 &&
                                "boolean" === typeof entire[0] &&
                                "number" === typeof entire[1] &&
                                Number.isFinite(entire[1]),
                        ] as const,
                        [
                            (top: any[]): any => top.length === 0,
                            (entire: any[]): any => entire.length === 0,
                        ] as const,
                    ];
                    for (const pred of tuplePredicators)
                        if (pred[0](array)) return pred[1](array);
                    return false;
                };
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) && ($ip0(elem) || false),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is typia.SnakeCase<TupleUnion> => {
                    const $guard = (typia.createAssert as any).guard;
                    const $ap0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ) => {
                        const array = input;
                        const tuplePredicators = [
                            [
                                (top: any[]): any =>
                                    top.length === 3 &&
                                    "number" === typeof top[0] &&
                                    Number.isFinite(top[0]) &&
                                    "string" === typeof top[1] &&
                                    "boolean" === typeof top[2],
                                (entire: any[]): any =>
                                    (entire.length === 3 ||
                                        $guard(_exceptionable, {
                                            path: _path,
                                            expected:
                                                "[number, string, boolean]",
                                            value: entire,
                                        })) &&
                                    (("number" === typeof entire[0] &&
                                        Number.isFinite(entire[0])) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[0]",
                                            expected: "number",
                                            value: entire[0],
                                        })) &&
                                    ("string" === typeof entire[1] ||
                                        $guard(_exceptionable, {
                                            path: _path + "[1]",
                                            expected: "string",
                                            value: entire[1],
                                        })) &&
                                    ("boolean" === typeof entire[2] ||
                                        $guard(_exceptionable, {
                                            path: _path + "[2]",
                                            expected: "boolean",
                                            value: entire[2],
                                        })),
                            ] as const,
                            [
                                (top: any[]): any =>
                                    top.length === 2 &&
                                    "boolean" === typeof top[0] &&
                                    "number" === typeof top[1] &&
                                    Number.isFinite(top[1]),
                                (entire: any[]): any =>
                                    (entire.length === 2 ||
                                        $guard(_exceptionable, {
                                            path: _path,
                                            expected: "[boolean, number]",
                                            value: entire,
                                        })) &&
                                    ("boolean" === typeof entire[0] ||
                                        $guard(_exceptionable, {
                                            path: _path + "[0]",
                                            expected: "boolean",
                                            value: entire[0],
                                        })) &&
                                    (("number" === typeof entire[1] &&
                                        Number.isFinite(entire[1])) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[1]",
                                            expected: "number",
                                            value: entire[1],
                                        })),
                            ] as const,
                            [
                                (top: any[]): any => top.length === 0,
                                (entire: any[]): any =>
                                    entire.length === 0 ||
                                    $guard(_exceptionable, {
                                        path: _path,
                                        expected: "[]",
                                        value: entire,
                                    }),
                            ] as const,
                        ];
                        for (const pred of tuplePredicators)
                            if (pred[0](array)) return pred[1](array);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "([number, string, boolean] | [boolean, number] | [])",
                            value: input,
                        });
                    };
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TupleUnion",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((Array.isArray(elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "([] | [boolean, number] | [number, string, boolean])",
                                            value: elem,
                                        })) &&
                                        ($ap0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true && _exceptionable,
                                        ) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "[number, string, boolean] | [boolean, number] | []",
                                                value: elem,
                                            }))) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "([] | [boolean, number] | [number, string, boolean])",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TupleUnion",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    });
