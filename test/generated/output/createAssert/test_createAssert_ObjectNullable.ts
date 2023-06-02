import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_createAssert_ObjectNullable = _test_assert(
    "ObjectNullable",
    ObjectNullable.generate,
    (input: any): ObjectNullable => {
        const __is: any = (input: any): input is ObjectNullable => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "object" === typeof input.manufacturer &&
                null !== input.manufacturer &&
                $io1(input.manufacturer) &&
                (null === input.brand ||
                    ("object" === typeof input.brand &&
                        null !== input.brand &&
                        $io2(input.brand))) &&
                (null === input.similar ||
                    ("object" === typeof input.similar &&
                        null !== input.similar &&
                        $iu0(input.similar)));
            const $io1: any = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io2: any = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ("brand" === input.type) return $io2(input);
                    if ("manufacturer" === input.type) return $io1(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "object" === typeof input[0] &&
                null !== input[0] &&
                $io0(input[0]) &&
                "object" === typeof input[1] &&
                null !== input[1] &&
                $io0(input[1]) &&
                "object" === typeof input[2] &&
                null !== input[2] &&
                $io0(input[2])
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectNullable => {
                const $ao0: any = (
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
                            expected: "ObjectNullable.IManufacturer",
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
                                expected: "(ObjectNullable.IBrand | null)",
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
                                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                value: input.similar,
                            })) &&
                            $au0(
                                input.similar,
                                _path + ".similar",
                                true && _exceptionable,
                            )));
                const $ao1: any = (
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
                const $ao2: any = (
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
                const $au0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("brand" === input.type)
                            return $ao2(input, _path, true && _exceptionable);
                        if ("manufacturer" === input.type)
                            return $ao1(input, _path, true && _exceptionable);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                            value: input,
                        });
                    })();
                return (
                    (Array.isArray(input) ||
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
                    (("object" === typeof input[0] && null !== input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "ObjectNullable.IProduct",
                            value: input[0],
                        })) &&
                    $ao0(input[0], _path + "[0]", true) &&
                    (("object" === typeof input[1] && null !== input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "ObjectNullable.IProduct",
                            value: input[1],
                        })) &&
                    $ao0(input[1], _path + "[1]", true) &&
                    (("object" === typeof input[2] && null !== input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "ObjectNullable.IProduct",
                            value: input[2],
                        })) &&
                    $ao0(input[2], _path + "[2]", true)
                );
            })(input, "$input", true);
        return input;
    },
    ObjectNullable.SPOILERS,
);
