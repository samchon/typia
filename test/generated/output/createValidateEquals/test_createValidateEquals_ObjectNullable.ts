import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_createValidateEquals_ObjectNullable = _test_validateEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    (
        input: any,
    ): typia.IValidation<
        [
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
        ]
    > => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectNullable => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                    ((("object" === typeof input.manufacturer &&
                        null !== input.manufacturer) ||
                        $report(_exceptionable, {
                            path: _path + ".manufacturer",
                            expected: "Resolve<ObjectNullable.IManufacturer>",
                            value: input.manufacturer,
                        })) &&
                        $vo1(
                            input.manufacturer,
                            _path + ".manufacturer",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".manufacturer",
                            expected: "Resolve<ObjectNullable.IManufacturer>",
                            value: input.manufacturer,
                        }),
                    null === input.brand ||
                        ((("object" === typeof input.brand &&
                            null !== input.brand) ||
                            $report(_exceptionable, {
                                path: _path + ".brand",
                                expected:
                                    "(Resolve<ObjectNullable.IBrand> | null)",
                                value: input.brand,
                            })) &&
                            $vo2(
                                input.brand,
                                _path + ".brand",
                                true && _exceptionable,
                            )) ||
                        $report(_exceptionable, {
                            path: _path + ".brand",
                            expected: "(Resolve<ObjectNullable.IBrand> | null)",
                            value: input.brand,
                        }),
                    null === input.similar ||
                        ((("object" === typeof input.similar &&
                            null !== input.similar) ||
                            $report(_exceptionable, {
                                path: _path + ".similar",
                                expected:
                                    "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer> | null)",
                                value: input.similar,
                            })) &&
                            $vu0(
                                input.similar,
                                _path + ".similar",
                                true && _exceptionable,
                            )) ||
                        $report(_exceptionable, {
                            path: _path + ".similar",
                            expected:
                                "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer> | null)",
                            value: input.similar,
                        }),
                    4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "name",
                                        "manufacturer",
                                        "brand",
                                        "similar",
                                    ].some((prop) => key === prop)
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
                    "manufacturer" === input.type ||
                        $report(_exceptionable, {
                            path: _path + ".type",
                            expected: '"manufacturer"',
                            value: input.type,
                        }),
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                    2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["type", "name"].some(
                                        (prop) => key === prop,
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
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "brand" === input.type ||
                        $report(_exceptionable, {
                            path: _path + ".type",
                            expected: '"brand"',
                            value: input.type,
                        }),
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                    2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["type", "name"].some(
                                        (prop) => key === prop,
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
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("manufacturer" === input.type)
                        return $vo1(input, _path, true && _exceptionable);
                    if ("brand" === input.type)
                        return $vo2(input, _path, true && _exceptionable);
                    return $report(_exceptionable, {
                        path: _path,
                        expected:
                            "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                        value: input,
                    })) &&
                    (input.length === 3 ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                            value: input,
                        })) &&
                    [
                        ((("object" === typeof input[0] && null !== input[0]) ||
                            $report(true, {
                                path: _path + "[0]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[0],
                            })) &&
                            $vo0(input[0], _path + "[0]", true)) ||
                            $report(true, {
                                path: _path + "[0]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[0],
                            }),
                        ((("object" === typeof input[1] && null !== input[1]) ||
                            $report(true, {
                                path: _path + "[1]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[1],
                            })) &&
                            $vo0(input[1], _path + "[1]", true)) ||
                            $report(true, {
                                path: _path + "[1]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[1],
                            }),
                        ((("object" === typeof input[2] && null !== input[2]) ||
                            $report(true, {
                                path: _path + "[2]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[2],
                            })) &&
                            $vo0(input[2], _path + "[2]", true)) ||
                            $report(true, {
                                path: _path + "[2]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[2],
                            }),
                    ].every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
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
    },
);
