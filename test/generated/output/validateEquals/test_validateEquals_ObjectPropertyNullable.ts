import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_validateEquals_ObjectPropertyNullable =
    _test_validateEquals<ObjectPropertyNullable>(ObjectPropertyNullable)(
        (input) =>
            ((input: any): typia.IValidation<ObjectPropertyNullable> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                    _exceptionable: boolean = true,
                ): input is ObjectPropertyNullable => {
                    const $io0 = (
                        input: any,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null === input.value ||
                            "boolean" === typeof input.value) &&
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
                        (null === input.value ||
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value))) &&
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
                        (null === input.value ||
                            "string" === typeof input.value) &&
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
                        (null === input.value ||
                            ("object" === typeof input.value &&
                                null !== input.value &&
                                $io4(input.value, true && _exceptionable))) &&
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
                        "string" === typeof input.id &&
                        (null === input.name ||
                            "string" === typeof input.name) &&
                        (undefined === input.grade ||
                            ("number" === typeof input.grade &&
                                Number.isFinite(input.grade))) &&
                        (null === input.serial ||
                            undefined === input.serial ||
                            ("number" === typeof input.serial &&
                                Number.isFinite(input.serial))) &&
                        (null === input.activated ||
                            "boolean" === typeof input.activated) &&
                        (3 === Object.keys(input).length ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "id",
                                        "name",
                                        "grade",
                                        "serial",
                                        "activated",
                                    ].some((prop: any) => key === prop)
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return false;
                            }));
                    return (
                        Array.isArray(input) &&
                        input.length === 4 &&
                        Array.isArray(input[0]) &&
                        input[0].every(
                            (elem: any, _index1: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem, true),
                        ) &&
                        Array.isArray(input[1]) &&
                        input[1].every(
                            (elem: any, _index2: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem, true),
                        ) &&
                        Array.isArray(input[2]) &&
                        input[2].every(
                            (elem: any, _index3: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem, true),
                        ) &&
                        Array.isArray(input[3]) &&
                        input[3].every(
                            (elem: any, _index4: number) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem, true),
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
                    ): input is ObjectPropertyNullable => {
                        const $join = (typia.validateEquals as any).join;
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.value ||
                                    "boolean" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(boolean | null)",
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
                                null === input.value ||
                                    ("number" === typeof input.value &&
                                        Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(null | number)",
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
                                null === input.value ||
                                    "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(null | string)",
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
                                null === input.value ||
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "(ObjectPropertyNullable.IMember | null)",
                                            value: input.value,
                                        })) &&
                                        $vo4(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectPropertyNullable.IMember | null)",
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
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                null === input.name ||
                                    "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "(null | string)",
                                        value: input.name,
                                    }),
                                undefined === input.grade ||
                                    ("number" === typeof input.grade &&
                                        Number.isFinite(input.grade)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".grade",
                                        expected: "(number | undefined)",
                                        value: input.grade,
                                    }),
                                null === input.serial ||
                                    undefined === input.serial ||
                                    ("number" === typeof input.serial &&
                                        Number.isFinite(input.serial)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".serial",
                                        expected: "(null | number | undefined)",
                                        value: input.serial,
                                    }),
                                null === input.activated ||
                                    "boolean" === typeof input.activated ||
                                    $report(_exceptionable, {
                                        path: _path + ".activated",
                                        expected: "(boolean | null)",
                                        value: input.activated,
                                    }),
                                3 === Object.keys(input).length ||
                                    false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            if (
                                                [
                                                    "id",
                                                    "name",
                                                    "grade",
                                                    "serial",
                                                    "activated",
                                                ].some(
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
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectPropertyNullable",
                                    value: input,
                                })) &&
                                (input.length === 4 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>]",
                                        value: input,
                                    })) &&
                                [
                                    ((Array.isArray(input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<boolean>>",
                                            value: input[0],
                                        })) &&
                                        input[0]
                                            .map(
                                                (elem: any, _index1: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[0][" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<boolean>",
                                                            value: elem,
                                                        })) &&
                                                        $vo0(
                                                            elem,
                                                            _path +
                                                                "[0][" +
                                                                _index1 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[0][" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<boolean>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<boolean>>",
                                            value: input[0],
                                        }),
                                    ((Array.isArray(input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<number>>",
                                            value: input[1],
                                        })) &&
                                        input[1]
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[1][" +
                                                                _index2 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<number>",
                                                            value: elem,
                                                        })) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                "[1][" +
                                                                _index2 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[1][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<number>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<number>>",
                                            value: input[1],
                                        }),
                                    ((Array.isArray(input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<string>>",
                                            value: input[2],
                                        })) &&
                                        input[2]
                                            .map(
                                                (elem: any, _index3: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[2][" +
                                                                _index3 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<string>",
                                                            value: elem,
                                                        })) &&
                                                        $vo2(
                                                            elem,
                                                            _path +
                                                                "[2][" +
                                                                _index3 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[2][" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<string>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<string>>",
                                            value: input[2],
                                        }),
                                    ((Array.isArray(input[3]) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                            value: input[3],
                                        })) &&
                                        input[3]
                                            .map(
                                                (elem: any, _index4: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[3][" +
                                                                _index4 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                                                            value: elem,
                                                        })) &&
                                                        $vo3(
                                                            elem,
                                                            _path +
                                                                "[3][" +
                                                                _index4 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[3][" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                            value: input[3],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectPropertyNullable",
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
