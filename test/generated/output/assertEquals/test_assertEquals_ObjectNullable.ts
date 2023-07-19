import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_assertEquals_ObjectNullable =
    _test_assertEquals<ObjectNullable>(ObjectNullable)((input) =>
        ((
            input: any,
        ): [
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
        ] => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ] => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io1(input.manufacturer, true && _exceptionable) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io2(input.brand, true && _exceptionable))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar, true && _exceptionable))) &&
                    (4 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "name",
                                    "manufacturer",
                                    "brand",
                                    "similar",
                                ].some((prop: any) => key === prop)
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
                    "manufacturer" === input.type &&
                    "string" === typeof input.name &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["type", "name"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io2 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "brand" === input.type &&
                    "string" === typeof input.name &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["type", "name"].some(
                                    (prop: any) => key === prop,
                                )
                            )
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
                        if ("brand" === input.type)
                            return $io2(input, true && _exceptionable);
                        if ("manufacturer" === input.type)
                            return $io1(input, true && _exceptionable);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0], true) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io0(input[1], true) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io0(input[2], true)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                ] => {
                    const $guard = (typia.assertEquals as any).guard;
                    const $join = (typia.assertEquals as any).join;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (((("object" === typeof input.manufacturer &&
                            null !== input.manufacturer) ||
                            $guard(_exceptionable, {
                                path: _path + ".manufacturer",
                                expected: "ObjectNullable.IManufacturer",
                                value: input.manufacturer,
                            })) &&
                            $ao1(
                                input.manufacturer,
                                _path + ".manufacturer",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".manufacturer",
                                expected: "ObjectNullable.IManufacturer",
                                value: input.manufacturer,
                            })) &&
                        (null === input.brand ||
                            ((("object" === typeof input.brand &&
                                null !== input.brand) ||
                                $guard(_exceptionable, {
                                    path: _path + ".brand",
                                    expected: "(ObjectNullable.IBrand | null)",
                                    value: input.brand,
                                })) &&
                                $ao2(
                                    input.brand,
                                    _path + ".brand",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".brand",
                                expected: "(ObjectNullable.IBrand | null)",
                                value: input.brand,
                            })) &&
                        (null === input.similar ||
                            ((("object" === typeof input.similar &&
                                null !== input.similar) ||
                                $guard(_exceptionable, {
                                    path: _path + ".similar",
                                    expected:
                                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                    value: input.similar,
                                })) &&
                                $au0(
                                    input.similar,
                                    _path + ".similar",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".similar",
                                expected:
                                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                value: input.similar,
                            })) &&
                        (4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "name",
                                        "manufacturer",
                                        "brand",
                                        "similar",
                                    ].some((prop: any) => key === prop)
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
                        ("manufacturer" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"manufacturer"',
                                value: input.type,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["type", "name"].some(
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
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("brand" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"brand"',
                                value: input.type,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["type", "name"].some(
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
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("brand" === input.type)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("manufacturer" === input.type)
                                return $ao1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectNullable",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]",
                                    value: input,
                                })) &&
                            (((("object" === typeof input[0] &&
                                null !== input[0]) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[0],
                                })) &&
                                $ao0(input[0], _path + "[0]", true)) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[0],
                                })) &&
                            (((("object" === typeof input[1] &&
                                null !== input[1]) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[1],
                                })) &&
                                $ao0(input[1], _path + "[1]", true)) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[1],
                                })) &&
                            (((("object" === typeof input[2] &&
                                null !== input[2]) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[2],
                                })) &&
                                $ao0(input[2], _path + "[2]", true)) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected: "ObjectNullable.IProduct",
                                    value: input[2],
                                }))) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectNullable",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        })(input),
    );
