import typia from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectNullable = _test_assertStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): ObjectNullable => {
                const $guard = (typia.assertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectNullable => {
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
                        (("object" === typeof input.manufacturer &&
                            null !== input.manufacturer) ||
                            $guard(_exceptionable, {
                                path: _path + ".manufacturer",
                                expected:
                                    "Resolve<ObjectNullable.IManufacturer>",
                                value: input.manufacturer,
                            })) &&
                        $ao1(
                            input.manufacturer,
                            _path + ".manufacturer",
                            true && _exceptionable,
                        ) &&
                        (null === input.brand ||
                            ((("object" === typeof input.brand &&
                                null !== input.brand) ||
                                $guard(_exceptionable, {
                                    path: _path + ".brand",
                                    expected:
                                        "(Resolve<ObjectNullable.IBrand> | null)",
                                    value: input.brand,
                                })) &&
                                $ao2(
                                    input.brand,
                                    _path + ".brand",
                                    true && _exceptionable,
                                ))) &&
                        (null === input.similar ||
                            ((("object" === typeof input.similar &&
                                null !== input.similar) ||
                                $guard(_exceptionable, {
                                    path: _path + ".similar",
                                    expected:
                                        "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer> | null)",
                                    value: input.similar,
                                })) &&
                                $au0(
                                    input.similar,
                                    _path + ".similar",
                                    true && _exceptionable,
                                )));
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
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("manufacturer" === input.type)
                                return $ao1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("brand" === input.type)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                                value: input,
                            });
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                                value: input,
                            })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
                                value: input,
                            })) &&
                        (("object" === typeof input[0] && null !== input[0]) ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[0],
                            })) &&
                        $ao0(input[0], _path + "[0]", true) &&
                        (("object" === typeof input[1] && null !== input[1]) ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[1],
                            })) &&
                        $ao0(input[1], _path + "[1]", true) &&
                        (("object" === typeof input[2] && null !== input[2]) ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: "Resolve<ObjectNullable.IProduct>",
                                value: input[2],
                            })) &&
                        $ao0(input[2], _path + "[2]", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ObjectNullable): string => {
                const $string = (typia.assertStringify as any).string;
                const $throws = (typia.assertStringify as any).throws;
                const $io1 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io2 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("manufacturer" === input.type) return $io1(input);
                        if ("brand" === input.type) return $io2(input);
                        return false;
                    })();
                const $so0 = (input: any): any =>
                    `{"name":${$string(input.name)},"manufacturer":${$so1(
                        input.manufacturer,
                    )},"brand":${
                        null !== input.brand ? $so2(input.brand) : "null"
                    },"similar":${
                        null !== input.similar ? $su0(input.similar) : "null"
                    }}`;
                const $so1 = (input: any): any =>
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
                const $so2 = (input: any): any =>
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
                        if ("manufacturer" === input.type) return $so1(input);
                        if ("brand" === input.type) return $so2(input);
                        $throws({
                            expected:
                                "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                            value: input,
                        });
                    })();
                return `[${$so0(input[0])},${$so0(input[1])},${$so0(
                    input[2],
                )}]`;
            };
            return stringify(assert(input));
        })(input),
    ObjectNullable.SPOILERS,
);
