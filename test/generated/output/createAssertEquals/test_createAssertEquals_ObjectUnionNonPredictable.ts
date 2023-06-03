import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_createAssertEquals_ObjectUnionNonPredictable =
    _test_assertEquals(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input: any): ObjectUnionNonPredictable => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ObjectUnionNonPredictable => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io1(input.value, true && _exceptionable) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io1 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value, true && _exceptionable) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
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
                    "boolean" === typeof input.value &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
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
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
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
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io7 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $iu0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($io6(input, false && _exceptionable))
                            return $io6(input, true && _exceptionable);
                        if ($io4(input, false && _exceptionable))
                            return $io4(input, true && _exceptionable);
                        if ($io2(input, false && _exceptionable))
                            return $io2(input, true && _exceptionable);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionNonPredictable => {
                    const $guard = (typia.createAssertEquals as any).guard;
                    const $join = (typia.createAssertEquals as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                value: input.value,
                            })) &&
                            $ao1(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
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
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                value: input.value,
                            })) &&
                            $au0(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
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
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<boolean>",
                                value: input.value,
                            })) &&
                            $ao3(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<boolean>",
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
                        ("boolean" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "boolean",
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
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<number>",
                                value: input.value,
                            })) &&
                            $ao5(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<number>",
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
                        (("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
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
                    const $ao6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.value &&
                            null !== input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<string>",
                                value: input.value,
                            })) &&
                            $ao7(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<string>",
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
                    const $ao7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
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
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ($ao6(input, _path, false && _exceptionable))
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ($ao4(input, _path, false && _exceptionable))
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ($ao2(input, _path, false && _exceptionable))
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectUnionNonPredictable",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionNonPredictable",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        },
    );
