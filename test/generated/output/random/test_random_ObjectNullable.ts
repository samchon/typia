import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_random_ObjectNullable = _test_random(
    "ObjectNullable",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectNullable> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                manufacturer: $ro1(
                    _recursive,
                    _recursive ? 1 + _depth : _depth,
                ),
                brand: $pick([
                    () => null,
                    () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
                similar: $pick([
                    () => null,
                    () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                    () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                type: "manufacturer",
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                type: "brand",
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            return [$ro0(), $ro0(), $ro0()];
        })(),
    (input: any): typia.Primitive<ObjectNullable> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is typia.Primitive<ObjectNullable> => {
            const $io0 = (input: any): boolean =>
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
            const $io1 = (input: any): boolean =>
                "manufacturer" === input.type && "string" === typeof input.name;
            const $io2 = (input: any): boolean =>
                "brand" === input.type && "string" === typeof input.name;
            const $iu0 = (input: any): any =>
                (() => {
                    if ("manufacturer" === input.type) return $io1(input);
                    if ("brand" === input.type) return $io2(input);
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
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectNullable> => {
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
                            expected: "Resolve<ObjectNullable.IManufacturer>",
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
                            return $ao1(input, _path, true && _exceptionable);
                        if ("brand" === input.type)
                            return $ao2(input, _path, true && _exceptionable);
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
    },
);
