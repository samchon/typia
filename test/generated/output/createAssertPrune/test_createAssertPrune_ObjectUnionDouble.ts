import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertPrune_ObjectUnionDouble = _test_assertPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): ObjectUnionDouble => {
        const assert = (input: any): ObjectUnionDouble => {
            const $guard = (typia.createAssertPrune as any).guard;
            const __is = (input: any): input is ObjectUnionDouble => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.x &&
                    Number.isFinite(input.value.x) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu0(input.child);
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof input.value.y;
                const $io4 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.y &&
                    Number.isFinite(input.value.y);
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.x &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu1(input.child);
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.y;
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io11(input.value);
                const $io11 = (input: any): boolean =>
                    Array.isArray(input.y) &&
                    input.y.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    );
                const $iu0 = (input: any): any =>
                    (() => {
                        if ($io2(input)) return $io2(input);
                        if ($io4(input)) return $io4(input);
                        return false;
                    })();
                const $iu1 = (input: any): any =>
                    (() => {
                        if ($io8(input)) return $io8(input);
                        if ($io10(input)) return $io10(input);
                        return false;
                    })();
                const $iu2 = (input: any): any =>
                    (() => {
                        if ($io0(input)) return $io0(input);
                        if ($io6(input)) return $io6(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu2(elem),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionDouble => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type>",
                                value: input.value,
                            })) &&
                        $ao1(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                                value: input.child,
                            })) &&
                        $au0(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                        $guard(_exceptionable, {
                            path: _path + ".x",
                            expected: "number",
                            value: input.x,
                        });
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type.o1>",
                                value: input.value,
                            })) &&
                        $ao3(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        );
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "boolean" === typeof input.y ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "boolean",
                            value: input.y,
                        });
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type.o2>",
                                value: input.value,
                            })) &&
                        $ao5(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        );
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "number",
                            value: input.y,
                        });
                    const $ao6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type.o3>",
                                value: input.value,
                            })) &&
                        $ao7(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof input.child &&
                            null !== input.child) ||
                            $guard(_exceptionable, {
                                path: _path + ".child",
                                expected:
                                    "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                                value: input.child,
                            })) &&
                        $au1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        );
                    const $ao7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "string" === typeof input.x ||
                        $guard(_exceptionable, {
                            path: _path + ".x",
                            expected: "string",
                            value: input.x,
                        });
                    const $ao8 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type.o4>",
                                value: input.value,
                            })) &&
                        $ao9(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        );
                    const $ao9 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "string" === typeof input.y ||
                        $guard(_exceptionable, {
                            path: _path + ".y",
                            expected: "string",
                            value: input.y,
                        });
                    const $ao10 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Resolve<__type.o5>",
                                value: input.value,
                            })) &&
                        $ao11(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        );
                    const $ao11 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.y) ||
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
                        );
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao2(input, _path, false && _exceptionable) ||
                        $ao4(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input,
                        });
                    const $au1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao8(input, _path, false && _exceptionable) ||
                        $ao10(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input,
                        });
                    const $au2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao0(input, _path, false && _exceptionable) ||
                        $ao6(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                            value: input,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
                                        value: elem,
                                    })) &&
                                $au2(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectUnionDouble): void => {
            const $throws = (typia.createAssertPrune as any).throws;
            const $io0 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu0(input.child);
            const $io1 = (input: any): boolean => "number" === typeof input.x;
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value);
            const $io3 = (input: any): boolean => "boolean" === typeof input.y;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value);
            const $io5 = (input: any): boolean => "number" === typeof input.y;
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io7 = (input: any): boolean => "string" === typeof input.x;
            const $io8 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value);
            const $io9 = (input: any): boolean => "string" === typeof input.y;
            const $io10 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11 = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every((elem: any) => "number" === typeof elem);
            const $iu0 = (input: any): any => $io2(input) || $io4(input);
            const $iu1 = (input: any): any => $io8(input) || $io10(input);
            const $iu2 = (input: any): any => $io0(input) || $io6(input);
            const $po0 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po1(input.value);
                if ("object" === typeof input.child && null !== input.child)
                    $pu0(input.child);
                for (const key of Object.keys(input)) {
                    if ("value" === key || "child" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key) continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po3(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po3 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po4 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po5(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po5 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po6 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po7(input.value);
                if ("object" === typeof input.child && null !== input.child)
                    $pu1(input.child);
                for (const key of Object.keys(input)) {
                    if ("value" === key || "child" === key) continue;
                    delete input[key];
                }
            };
            const $po7 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("x" === key) continue;
                    delete input[key];
                }
            };
            const $po8 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po9(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po9 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $po10 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po11(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po11 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("y" === key) continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if ($io2(input)) return $po2(input);
                    if ($io4(input)) return $po4(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                        value: input,
                    });
                })();
            const $pu1 = (input: any): any =>
                (() => {
                    if ($io8(input)) return $po8(input);
                    if ($io10(input)) return $po10(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                        value: input,
                    });
                })();
            const $pu2 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $po0(input);
                    if ($io6(input)) return $po6(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                        value: input,
                    });
                })();
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $pu2(elem);
                });
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectUnionDouble.SPOILERS,
);
