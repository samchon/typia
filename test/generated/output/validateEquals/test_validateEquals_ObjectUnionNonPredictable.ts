import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_validateEquals_ObjectUnionNonPredictable =
    _test_validateEquals(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) =>
            ((input: any): typia.IValidation<ObjectUnionNonPredictable> => {
                const errors = [] as any[];
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
                if (false === __is(input)) {
                    const $report = (typia.validateEquals as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionNonPredictable => {
                        const $join = (typia.validateEquals as any).join;
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
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                        value: input.value,
                                    })) &&
                                    $vo1(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
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
                                            if (undefined === value)
                                                return true;
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
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                        value: input.value,
                                    })) &&
                                    $vu0(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
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
                                            if (undefined === value)
                                                return true;
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
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<boolean>",
                                        value: input.value,
                                    })) &&
                                    $vo3(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<boolean>",
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
                                            if (undefined === value)
                                                return true;
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
                                "boolean" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "boolean",
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
                                            if (undefined === value)
                                                return true;
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
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<number>",
                                        value: input.value,
                                    })) &&
                                    $vo5(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<number>",
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
                                            if (undefined === value)
                                                return true;
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
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
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
                                            if (undefined === value)
                                                return true;
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
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<string>",
                                        value: input.value,
                                    })) &&
                                    $vo7(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "ObjectUnionNonPredictable.IPointer<string>",
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
                                            if (undefined === value)
                                                return true;
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
                                "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string",
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
                                            if (undefined === value)
                                                return true;
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
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ($vo4(input, _path, false && _exceptionable))
                                    return $vo4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ($vo2(input, _path, false && _exceptionable))
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $report(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                                    value: input,
                                });
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionNonPredictable",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectUnionNonPredictable",
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
