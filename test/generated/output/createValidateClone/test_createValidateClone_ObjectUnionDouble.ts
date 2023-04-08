import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createValidateClone_ObjectUnionDouble = _test_validateClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): typia.IValidation<typia.Primitive<ObjectUnionDouble>> => {
        const validate = (input: any): typia.IValidation<ObjectUnionDouble> => {
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
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionDouble => {
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
                                    expected: "Resolve<__type>",
                                    value: input.value,
                                })) &&
                                $vo1(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type>",
                                    value: input.value,
                                }),
                            ((("object" === typeof input.child &&
                                null !== input.child) ||
                                $report(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                                    value: input.child,
                                })) &&
                                $vu0(
                                    input.child,
                                    _path + ".child",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "(Resolve<ObjectUnionDouble.IAA> | Resolve<ObjectUnionDouble.IAB>)",
                                    value: input.child,
                                }),
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
                                    expected: "Resolve<__type.o1>",
                                    value: input.value,
                                })) &&
                                $vo3(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o1>",
                                    value: input.value,
                                }),
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
                                    expected: "Resolve<__type.o2>",
                                    value: input.value,
                                })) &&
                                $vo5(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o2>",
                                    value: input.value,
                                }),
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
                                    expected: "Resolve<__type.o3>",
                                    value: input.value,
                                })) &&
                                $vo7(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o3>",
                                    value: input.value,
                                }),
                            ((("object" === typeof input.child &&
                                null !== input.child) ||
                                $report(_exceptionable, {
                                    path: _path + ".child",
                                    expected:
                                        "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
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
                                        "(Resolve<ObjectUnionDouble.IBA> | Resolve<ObjectUnionDouble.IBB>)",
                                    value: input.child,
                                }),
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
                                    expected: "Resolve<__type.o4>",
                                    value: input.value,
                                })) &&
                                $vo9(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o4>",
                                    value: input.value,
                                }),
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
                                    expected: "Resolve<__type.o5>",
                                    value: input.value,
                                })) &&
                                $vo11(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Resolve<__type.o5>",
                                    value: input.value,
                                }),
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
                                                path:
                                                    _path +
                                                    ".y[" +
                                                    _index2 +
                                                    "]",
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
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $vo2(input, _path, false && _exceptionable) ||
                        $vo4(input, _path, false && _exceptionable);
                    const $vu1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $vo8(input, _path, false && _exceptionable) ||
                        $vo10(input, _path, false && _exceptionable);
                    const $vu2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        $vo0(input, _path, false && _exceptionable) ||
                        $vo6(input, _path, false && _exceptionable);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
                                                value: elem,
                                            })) &&
                                            $vu2(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ObjectUnionDouble.IA> | Resolve<ObjectUnionDouble.IB>)>",
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
        const clone = (
            input: ObjectUnionDouble,
        ): typia.Primitive<ObjectUnionDouble> => {
            const $throws = (typia.createValidateClone as any).throws;
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
            const $co0 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co1(input.value)
                        : (input.value as any),
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $cu0(input.child)
                        : (input.child as any),
            });
            const $co1 = (input: any): any => ({
                x: input.x as any,
            });
            const $co2 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co3(input.value)
                        : (input.value as any),
            });
            const $co3 = (input: any): any => ({
                y: input.y as any,
            });
            const $co4 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co5(input.value)
                        : (input.value as any),
            });
            const $co5 = (input: any): any => ({
                y: input.y as any,
            });
            const $co6 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co7(input.value)
                        : (input.value as any),
                child:
                    "object" === typeof input.child && null !== input.child
                        ? $cu1(input.child)
                        : (input.child as any),
            });
            const $co7 = (input: any): any => ({
                x: input.x as any,
            });
            const $co8 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co9(input.value)
                        : (input.value as any),
            });
            const $co9 = (input: any): any => ({
                y: input.y as any,
            });
            const $co10 = (input: any): any => ({
                value:
                    "object" === typeof input.value && null !== input.value
                        ? $co11(input.value)
                        : (input.value as any),
            });
            const $co11 = (input: any): any => ({
                y: Array.isArray(input.y)
                    ? input.y.map((elem: any) => elem as any)
                    : (input.y as any),
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ($io2(input)) return $co2(input);
                    if ($io4(input)) return $co4(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                        value: input,
                    });
                })();
            const $cu1 = (input: any): any =>
                (() => {
                    if ($io8(input)) return $co8(input);
                    if ($io10(input)) return $co10(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                        value: input,
                    });
                })();
            const $cu2 = (input: any): any =>
                (() => {
                    if ($io0(input)) return $co0(input);
                    if ($io6(input)) return $co6(input);
                    $throws({
                        expected:
                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                        value: input,
                    });
                })();
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu2(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    ObjectUnionDouble.SPOILERS,
);
