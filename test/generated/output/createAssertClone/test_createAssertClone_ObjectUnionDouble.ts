import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): typia.Primitive<ObjectUnionDouble> => {
        const assert: any = (input: any): ObjectUnionDouble => {
            const __is: any = (input: any): input is ObjectUnionDouble => {
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.x &&
                    Number.isFinite(input.value.x) &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu1(input.child);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof input.value.y;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.y &&
                    Number.isFinite(input.value.y);
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.x &&
                    "object" === typeof input.child &&
                    null !== input.child &&
                    $iu2(input.child);
                const $io8: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.y;
                const $io10: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io11(input.value);
                const $io11: any = (input: any): boolean =>
                    Array.isArray(input.y) &&
                    input.y.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    );
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ($io6(input)) return $io6(input);
                        if ($io0(input)) return $io0(input);
                        return false;
                    })();
                const $iu1: any = (input: any): any =>
                    (() => {
                        if ($io4(input)) return $io4(input);
                        if ($io2(input)) return $io2(input);
                        return false;
                    })();
                const $iu2: any = (input: any): any =>
                    (() => {
                        if ($io10(input)) return $io10(input);
                        if ($io8(input)) return $io8(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const $guard: any = (typia.createAssertClone as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionDouble => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        ) &&
                        (("object" === typeof input.child &&
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
                        );
                    const $ao1: any = (
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
                    const $ao2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        );
                    const $ao3: any = (
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
                    const $ao4: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        );
                    const $ao5: any = (
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
                    const $ao6: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        ) &&
                        (("object" === typeof input.child &&
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
                        );
                    const $ao7: any = (
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
                    const $ao8: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        );
                    const $ao9: any = (
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
                    const $ao10: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.value &&
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
                        );
                    const $ao11: any = (
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
                    const $au0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao6(input, _path, false && _exceptionable) ||
                        $ao0(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
                            value: input,
                        });
                    const $au1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao4(input, _path, false && _exceptionable) ||
                        $ao2(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
                            value: input,
                        });
                    const $au2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $ao10(input, _path, false && _exceptionable) ||
                        $ao8(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
                            value: input,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectUnionDouble",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                        value: elem,
                                    })) &&
                                $au0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const clone: any = (
            input: ObjectUnionDouble,
        ): typia.Primitive<ObjectUnionDouble> => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child);
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.x;
            const $io2: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value);
            const $io3: any = (input: any): boolean =>
                "boolean" === typeof input.y;
            const $io4: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value);
            const $io5: any = (input: any): boolean =>
                "number" === typeof input.y;
            const $io6: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu2(input.child);
            const $io7: any = (input: any): boolean =>
                "string" === typeof input.x;
            const $io8: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value);
            const $io9: any = (input: any): boolean =>
                "string" === typeof input.y;
            const $io10: any = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value);
            const $io11: any = (input: any): boolean =>
                Array.isArray(input.y) &&
                input.y.every((elem: any) => "number" === typeof elem);
            const $iu1: any = (input: any): any => $io4(input) || $io2(input);
            const $iu2: any = (input: any): any => $io10(input) || $io8(input);
            const $throws: any = (typia.createAssertClone as any).throws;
            const $co0: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co1(input.value)
                        : (input.value as any),
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $cu1(input.child)
                        : (input.child as any),
            });
            const $co1: any = (input: any): any => ({
                x: input.x as any,
            });
            const $co2: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co3(input.value)
                        : (input.value as any),
            });
            const $co3: any = (input: any): any => ({
                y: input.y as any,
            });
            const $co4: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co5(input.value)
                        : (input.value as any),
            });
            const $co5: any = (input: any): any => ({
                y: input.y as any,
            });
            const $co6: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co7(input.value)
                        : (input.value as any),
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $cu2(input.child)
                        : (input.child as any),
            });
            const $co7: any = (input: any): any => ({
                x: input.x as any,
            });
            const $co8: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co9(input.value)
                        : (input.value as any),
            });
            const $co9: any = (input: any): any => ({
                y: input.y as any,
            });
            const $co10: any = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co11(input.value)
                        : (input.value as any),
            });
            const $co11: any = (input: any): any => ({
                y: Array.isArray(input.y)
                    ? (() => input.y.map((elem: any) => elem as any))()
                    : (input.y as any),
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        };
        assert(input);
        const output: any = clone(input);
        return output;
    },
    ObjectUnionDouble.SPOILERS,
);
