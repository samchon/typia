import typia from "../../../../src";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertGuardEquals_ObjectUnionDouble =
    _test_assertGuardEquals("ObjectUnionDouble")<ObjectUnionDouble>(
        ObjectUnionDouble,
    )((input: any): asserts input is ObjectUnionDouble => {
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
                    else if ($io0(input, false && _exceptionable))
                        return $io0(input, true && _exceptionable);
                    else return false;
                })();
            const $iu1 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io4(input, false && _exceptionable))
                        return $io4(input, true && _exceptionable);
                    else if ($io2(input, false && _exceptionable))
                        return $io2(input, true && _exceptionable);
                    else return false;
                })();
            const $iu2 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io10(input, false && _exceptionable))
                        return $io10(input, true && _exceptionable);
                    else if ($io8(input, false && _exceptionable))
                        return $io8(input, true && _exceptionable);
                    else return false;
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
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUnionDouble => {
                const $guard = (typia.createAssertGuardEquals as any).guard;
                const $join = (typia.createAssertGuardEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                        $ao1(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                    (((("object" === typeof input.child &&
                        null !== input.child) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        })) &&
                        $au1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["value", "child"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.x &&
                        Number.isFinite(input.x)) ||
                        $guard(_exceptionable, {
                            path: _path + ".x",
                            expected: "number",
                            value: input.x,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["x"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o1",
                            value: input.value,
                        })) &&
                        $ao3(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o1",
                            value: input.value,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("boolean" === typeof input.y ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "boolean",
                            value: input.y,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["y"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o2",
                            value: input.value,
                        })) &&
                        $ao5(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o2",
                            value: input.value,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.y &&
                        Number.isFinite(input.y)) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "number",
                            value: input.y,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["y"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        })) &&
                        $ao7(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        })) &&
                    (((("object" === typeof input.child &&
                        null !== input.child) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        })) &&
                        $au2(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["value", "child"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.x ||
                        $guard(_exceptionable, {
                            path: _path + ".x",
                            expected: "string",
                            value: input.x,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["x"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o4",
                            value: input.value,
                        })) &&
                        $ao9(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o4",
                            value: input.value,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.y ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "string",
                            value: input.y,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["y"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao10 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o5",
                            value: input.value,
                        })) &&
                        $ao11(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o5",
                            value: input.value,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao11 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.y) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "Array<number>",
                            value: input.y,
                        })) &&
                        input.y.every(
                            (elem: any, _index2: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".y[" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "Array<number>",
                            value: input.y,
                        })) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (["y"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($ao6(input, _path, false && _exceptionable))
                            return $ao6(input, _path, true && _exceptionable);
                        else if ($ao0(input, _path, false && _exceptionable))
                            return $ao0(input, _path, true && _exceptionable);
                        else
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                                value: input,
                            });
                    })();
                const $au1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($ao4(input, _path, false && _exceptionable))
                            return $ao4(input, _path, true && _exceptionable);
                        else if ($ao2(input, _path, false && _exceptionable))
                            return $ao2(input, _path, true && _exceptionable);
                        else
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                                value: input,
                            });
                    })();
                const $au2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($ao10(input, _path, false && _exceptionable))
                            return $ao10(input, _path, true && _exceptionable);
                        else if ($ao8(input, _path, false && _exceptionable))
                            return $ao8(input, _path, true && _exceptionable);
                        else
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                                value: input,
                            });
                    })();
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionDouble",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectUnionDouble",
                        value: input,
                    })
                );
            })(input, "$input", true);
    });
