import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { SetAlias } from "../../../structures/SetAlias";

export const test_createRandom_SetAlias = _test_random("SetAlias")<SetAlias>(
    SetAlias,
)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<SetAlias> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            booleans: new Set(
                (generator?.array ?? $generator.array)(() =>
                    (generator?.boolean ?? $generator.boolean)(),
                ),
            ),
            numbers: new Set(
                (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100),
                ),
            ),
            strings: new Set(
                (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)(),
                ),
            ),
            arrays: new Set(
                (generator?.array ?? $generator.array)(() =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100),
                    ),
                ),
            ),
            objects: new Set(
                (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            ),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            age:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
        });
        return $ro0();
    },
    assert: (input: any): SetAlias => {
        const __is = (input: any): input is SetAlias => {
            const $io0 = (input: any): boolean =>
                input.booleans instanceof Set &&
                (() =>
                    [...input.booleans].every(
                        (elem: any) => "boolean" === typeof elem,
                    ))() &&
                input.numbers instanceof Set &&
                (() =>
                    [...input.numbers].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ))() &&
                input.strings instanceof Set &&
                (() =>
                    [...input.strings].every(
                        (elem: any) => "string" === typeof elem,
                    ))() &&
                input.arrays instanceof Set &&
                (() =>
                    [...input.arrays].every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every(
                                (elem: any) =>
                                    "number" === typeof elem &&
                                    Number.isFinite(elem),
                            ),
                    ))() &&
                input.objects instanceof Set &&
                (() =>
                    [...input.objects].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    ))();
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is SetAlias => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((input.booleans instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".booleans",
                            expected: "Set<boolean>",
                            value: input.booleans,
                        })) &&
                        (() =>
                            [...input.booleans].every(
                                (elem: any, _index1: number) =>
                                    "boolean" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".booleans[" +
                                            _index1 +
                                            "]",
                                        expected: "boolean",
                                        value: elem,
                                    }),
                            ))()) ||
                        $guard(_exceptionable, {
                            path: _path + ".booleans",
                            expected: "Set<boolean>",
                            value: input.booleans,
                        })) &&
                    (((input.numbers instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".numbers",
                            expected: "Set<number>",
                            value: input.numbers,
                        })) &&
                        (() =>
                            [...input.numbers].every(
                                (elem: any, _index2: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".numbers[" + _index2 + "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            ))()) ||
                        $guard(_exceptionable, {
                            path: _path + ".numbers",
                            expected: "Set<number>",
                            value: input.numbers,
                        })) &&
                    (((input.strings instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".strings",
                            expected: "Set<string>",
                            value: input.strings,
                        })) &&
                        (() =>
                            [...input.strings].every(
                                (elem: any, _index3: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".strings[" + _index3 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            ))()) ||
                        $guard(_exceptionable, {
                            path: _path + ".strings",
                            expected: "Set<string>",
                            value: input.strings,
                        })) &&
                    (((input.arrays instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".arrays",
                            expected: "Set<Array<number>>",
                            value: input.arrays,
                        })) &&
                        (() =>
                            [...input.arrays].every(
                                (elem: any, _index4: number) =>
                                    ((Array.isArray(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".arrays[" +
                                                _index4 +
                                                "]",
                                            expected: "Array<number>",
                                            value: elem,
                                        })) &&
                                        elem.every(
                                            (elem: any, _index5: number) =>
                                                ("number" === typeof elem &&
                                                    Number.isFinite(elem)) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".arrays[" +
                                                        _index4 +
                                                        "][" +
                                                        _index5 +
                                                        "]",
                                                    expected: "number",
                                                    value: elem,
                                                }),
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".arrays[" + _index4 + "]",
                                        expected: "Array<number>",
                                        value: elem,
                                    }),
                            ))()) ||
                        $guard(_exceptionable, {
                            path: _path + ".arrays",
                            expected: "Set<Array<number>>",
                            value: input.arrays,
                        })) &&
                    (((input.objects instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".objects",
                            expected: "Set<SetAlias.Person>",
                            value: input.objects,
                        })) &&
                        (() =>
                            [...input.objects].every(
                                (elem: any, _index6: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".objects[" +
                                                _index6 +
                                                "]",
                                            expected: "SetAlias.Person",
                                            value: elem,
                                        })) &&
                                        $ao1(
                                            elem,
                                            _path + ".objects[" + _index6 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".objects[" + _index6 + "]",
                                        expected: "SetAlias.Person",
                                        value: elem,
                                    }),
                            ))()) ||
                        $guard(_exceptionable, {
                            path: _path + ".objects",
                            expected: "Set<SetAlias.Person>",
                            value: input.objects,
                        }));
                const $ao1 = (
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
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "SetAlias",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "SetAlias",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
