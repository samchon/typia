import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_random_ObjectPropertyNullable = _test_random(
    "ObjectPropertyNullable",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectPropertyNullable> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $pick([
                    () => null,
                    () => (generator?.boolean ?? $generator.boolean)(),
                ])(),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $pick([
                    () => null,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100),
                ])(),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $pick([
                    () => null,
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)(),
                ])(),
            });
            const $ro3 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: $pick([
                    () => null,
                    () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
                ])(),
            });
            const $ro4 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                id:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                name: $pick([
                    () => null,
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)(),
                ])(),
                grade: $pick([
                    () => undefined,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100),
                ])(),
                serial: $pick([
                    () => undefined,
                    () => null,
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100),
                ])(),
                activated: $pick([
                    () => null,
                    () => (generator?.boolean ?? $generator.boolean)(),
                ])(),
            });
            return [
                (generator?.array ?? $generator.array)(() => $ro0()),
                (generator?.array ?? $generator.array)(() => $ro1()),
                (generator?.array ?? $generator.array)(() => $ro2()),
                (generator?.array ?? $generator.array)(() => $ro3()),
            ];
        })(),
    (input: any): typia.Primitive<ObjectPropertyNullable> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectPropertyNullable> => {
            const $io0 = (input: any): boolean =>
                null === input.value || "boolean" === typeof input.value;
            const $io1 = (input: any): boolean =>
                null === input.value ||
                ("number" === typeof input.value &&
                    Number.isFinite(input.value));
            const $io2 = (input: any): boolean =>
                null === input.value || "string" === typeof input.value;
            const $io3 = (input: any): boolean =>
                null === input.value ||
                ("object" === typeof input.value &&
                    null !== input.value &&
                    $io4(input.value));
            const $io4 = (input: any): boolean =>
                "string" === typeof input.id &&
                (null === input.name || "string" === typeof input.name) &&
                (undefined === input.grade ||
                    ("number" === typeof input.grade &&
                        Number.isFinite(input.grade))) &&
                (null === input.serial ||
                    undefined === input.serial ||
                    ("number" === typeof input.serial &&
                        Number.isFinite(input.serial))) &&
                (null === input.activated ||
                    "boolean" === typeof input.activated);
            return (
                Array.isArray(input) &&
                input.length === 4 &&
                Array.isArray(input[0]) &&
                input[0].every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                Array.isArray(input[1]) &&
                input[1].every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                ) &&
                Array.isArray(input[2]) &&
                input[2].every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                ) &&
                Array.isArray(input[3]) &&
                input[3].every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectPropertyNullable> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    null === input.value ||
                    "boolean" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(boolean | null)",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    null === input.value ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(null | number)",
                        value: input.value,
                    });
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    null === input.value ||
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(null | string)",
                        value: input.value,
                    });
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    null === input.value ||
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "(Resolve<ObjectPropertyNullable.IMember> | null)",
                            value: input.value,
                        })) &&
                        $ao4(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        ));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    (null === input.name ||
                        "string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "(null | string)",
                            value: input.name,
                        })) &&
                    (undefined === input.grade ||
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade)) ||
                        $guard(_exceptionable, {
                            path: _path + ".grade",
                            expected: "(number | undefined)",
                            value: input.grade,
                        })) &&
                    (null === input.serial ||
                        undefined === input.serial ||
                        ("number" === typeof input.serial &&
                            Number.isFinite(input.serial)) ||
                        $guard(_exceptionable, {
                            path: _path + ".serial",
                            expected: "(null | number | undefined)",
                            value: input.serial,
                        })) &&
                    (null === input.activated ||
                        "boolean" === typeof input.activated ||
                        $guard(_exceptionable, {
                            path: _path + ".activated",
                            expected: "(boolean | null)",
                            value: input.activated,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
                            value: input,
                        })) &&
                    (input.length === 4 ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
                            value: input,
                        })) &&
                    (Array.isArray(input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected:
                                "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
                            value: input[0],
                        })) &&
                    input[0].every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[0][" + _index1 + "]",
                                    expected:
                                        "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[0][" + _index1 + "]", true),
                    ) &&
                    (Array.isArray(input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected:
                                "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
                            value: input[1],
                        })) &&
                    input[1].every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[1][" + _index2 + "]",
                                    expected:
                                        "Resolve<ObjectPropertyNullable.IPointer<number>>",
                                    value: elem,
                                })) &&
                            $ao1(elem, _path + "[1][" + _index2 + "]", true),
                    ) &&
                    (Array.isArray(input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected:
                                "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
                            value: input[2],
                        })) &&
                    input[2].every(
                        (elem: any, _index3: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[2][" + _index3 + "]",
                                    expected:
                                        "Resolve<ObjectPropertyNullable.IPointer<string>>",
                                    value: elem,
                                })) &&
                            $ao2(elem, _path + "[2][" + _index3 + "]", true),
                    ) &&
                    (Array.isArray(input[3]) ||
                        $guard(true, {
                            path: _path + "[3]",
                            expected:
                                "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
                            value: input[3],
                        })) &&
                    input[3].every(
                        (elem: any, _index4: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[3][" + _index4 + "]",
                                    expected:
                                        "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                    value: elem,
                                })) &&
                            $ao3(elem, _path + "[3][" + _index4 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
