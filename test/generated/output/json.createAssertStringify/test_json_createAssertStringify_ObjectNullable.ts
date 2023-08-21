import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_json_assertStringify_ObjectNullable =
    _test_json_assertStringify("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )((input: any): string => {
        const assert = (input: any): ObjectNullable => {
            const __is = (input: any): input is ObjectNullable => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io2(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io3(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io2 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io3 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io3(input);
                        else if ("manufacturer" === input.type)
                            return $io2(input);
                        else return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectNullable => {
                    const $guard = (typia.json.createAssertStringify as any)
                        .guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "Array<ObjectNullable.IProduct>",
                                value: input.value,
                            })) &&
                            input.value.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "ObjectNullable.IProduct",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "ObjectNullable.IProduct",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<ObjectNullable.IProduct>",
                            value: input.value,
                        });
                    const $ao1 = (
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
                            $ao2(
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
                                $ao3(
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
                            }));
                    const $ao2 = (
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
                            }));
                    const $ao3 = (
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
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("brand" === input.type)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if ("manufacturer" === input.type)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return $guard(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                    value: input,
                                });
                        })();
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectNullable",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectNullable",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: ObjectNullable): string => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "object" === typeof input.manufacturer &&
                null !== input.manufacturer &&
                $io2(input.manufacturer) &&
                (null === input.brand ||
                    ("object" === typeof input.brand &&
                        null !== input.brand &&
                        $io3(input.brand))) &&
                (null === input.similar ||
                    ("object" === typeof input.similar &&
                        null !== input.similar &&
                        $iu0(input.similar)));
            const $io2 = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io3 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io3(input);
                    else if ("manufacturer" === input.type) return $io2(input);
                    else return false;
                })();
            const $string = (typia.json.createAssertStringify as any).string;
            const $throws = (typia.json.createAssertStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map((elem: any) => $so1(elem))
                    .join(",")}]`}}`;
            const $so1 = (input: any): any =>
                `{"name":${$string(input.name)},"manufacturer":${$so2(
                    input.manufacturer,
                )},"brand":${
                    null !== input.brand ? $so3(input.brand) : "null"
                },"similar":${
                    null !== input.similar ? $su0(input.similar) : "null"
                }}`;
            const $so2 = (input: any): any =>
                `{"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"manufacturer"',
                        value: input.type,
                    });
                })()},"name":${$string(input.name)}}`;
            const $so3 = (input: any): any =>
                `{"type":${(() => {
                    if ("string" === typeof input.type)
                        return $string(input.type);
                    if ("string" === typeof input.type)
                        return '"' + input.type + '"';
                    $throws({
                        expected: '"brand"',
                        value: input.type,
                    });
                })()},"name":${$string(input.name)}}`;
            const $su0 = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $so3(input);
                    else if ("manufacturer" === input.type) return $so2(input);
                    else
                        $throws({
                            expected:
                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                            value: input,
                        });
                })();
            return $so0(input);
        };
        return stringify(assert(input));
    });
