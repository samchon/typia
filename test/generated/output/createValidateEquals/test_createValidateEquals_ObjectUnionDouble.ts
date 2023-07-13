import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_validateEquals_ObjectUnionDouble = _test_validateEquals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): typia.IValidation<ObjectUnionDouble> => {
        const errors = [] as any[];
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectUnionDouble => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value, true && _exceptionable) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child, true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["value", "child"].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["x"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io2 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io3 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "boolean" === typeof input.y &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["y"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io4 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io5 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["y"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io6 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value, true && _exceptionable) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child, true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["value", "child"].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io7 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.x &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["x"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io8 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io9 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.y &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["y"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io10 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io11 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.y) &&
                input.y.every(
                    (elem: any, _index2: number) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["y"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io6(input, false && _exceptionable))
                        return $io6(input, true && _exceptionable);
                    if ($io0(input, false && _exceptionable))
                        return $io0(input, true && _exceptionable);
                    return false;
                })();
            const $iu1 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io4(input, false && _exceptionable))
                        return $io4(input, true && _exceptionable);
                    if ($io2(input, false && _exceptionable))
                        return $io2(input, true && _exceptionable);
                    return false;
                })();
            const $iu2 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io10(input, false && _exceptionable))
                        return $io10(input, true && _exceptionable);
                    if ($io8(input, false && _exceptionable))
                        return $io8(input, true && _exceptionable);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $iu0(elem, true),
                )
            );
        };
        if (false === __is(input)) {
            const $report = (typia.createValidateEquals as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUnionDouble => {
                const $join = (typia.createValidateEquals as any).join;
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type",
                                value: input.value,
                            })) &&
                            $vo1(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type",
                                value: input.value,
                            }),
                        ((("object" === typeof input.child &&
                            null !== input.child) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                                value: input.child,
                            })) &&
                            $vu1(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                                value: input.child,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value", "child"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $report(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["x"].some((prop: any) => key === prop))
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
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o1",
                                value: input.value,
                            })) &&
                            $vo3(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o1",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "boolean" === typeof input.y ||
                            $report(_exceptionable, {
                                path: _path + ".y",
                                expected: "boolean",
                                value: input.y,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["y"].some((prop: any) => key === prop))
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
                const $vo4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o2",
                                value: input.value,
                            })) &&
                            $vo5(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o2",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                            $report(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["y"].some((prop: any) => key === prop))
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
                const $vo6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o3",
                                value: input.value,
                            })) &&
                            $vo7(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o3",
                                value: input.value,
                            }),
                        ((("object" === typeof input.child &&
                            null !== input.child) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                                value: input.child,
                            })) &&
                            $vu2(
                                input.child,
                                _path + ".child",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                                value: input.child,
                            }),
                        2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value", "child"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.x ||
                            $report(_exceptionable, {
                                path: _path + ".x",
                                expected: "string",
                                value: input.x,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["x"].some((prop: any) => key === prop))
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
                const $vo8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o4",
                                value: input.value,
                            })) &&
                            $vo9(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o4",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.y ||
                            $report(_exceptionable, {
                                path: _path + ".y",
                                expected: "string",
                                value: input.y,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["y"].some((prop: any) => key === prop))
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
                const $vo10 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o5",
                                value: input.value,
                            })) &&
                            $vo11(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "__type.o5",
                                value: input.value,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (
                                        ["value"].some(
                                            (prop: any) => key === prop,
                                        )
                                    )
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
                const $vo11 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((Array.isArray(input.y) ||
                            $report(_exceptionable, {
                                path: _path + ".y",
                                expected: "Array<number>",
                                value: input.y,
                            })) &&
                            input.y
                                .map(
                                    (elem: any, _index2: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".y[" + _index2 + "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".y",
                                expected: "Array<number>",
                                value: input.y,
                            }),
                        1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key: any) => {
                                    if (["y"].some((prop: any) => key === prop))
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
                const $vu0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($vo6(input, _path, false && _exceptionable))
                            return $vo6(input, _path, true && _exceptionable);
                        if ($vo0(input, _path, false && _exceptionable))
                            return $vo0(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                            value: input,
                        });
                    })();
                const $vu1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($vo4(input, _path, false && _exceptionable))
                            return $vo4(input, _path, true && _exceptionable);
                        if ($vo2(input, _path, false && _exceptionable))
                            return $vo2(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                            value: input,
                        });
                    })();
                const $vu2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($vo10(input, _path, false && _exceptionable))
                            return $vo10(input, _path, true && _exceptionable);
                        if ($vo8(input, _path, false && _exceptionable))
                            return $vo8(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                            value: input,
                        });
                    })();
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ObjectUnionDouble",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                            value: elem,
                                        })) &&
                                        $vu0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ObjectUnionDouble",
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
    },
);
