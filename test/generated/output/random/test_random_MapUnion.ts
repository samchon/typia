import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { MapUnion } from "../../../structures/MapUnion";

export const test_random_MapUnion = _test_random("MapUnion")<MapUnion>(
    MapUnion,
)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<MapUnion> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
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
            return (generator?.array ?? $generator.array)(() =>
                $pick([
                    () =>
                        new Map(
                            (generator?.array ?? $generator.array)(() => [
                                (generator?.boolean ?? $generator.boolean)(),
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                            ]),
                        ),
                    () =>
                        new Map(
                            (generator?.array ?? $generator.array)(() => [
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                            ]),
                        ),
                    () =>
                        new Map(
                            (generator?.array ?? $generator.array)(() => [
                                (
                                    generator?.customs ?? $generator.customs
                                )?.string?.([]) ??
                                    (generator?.string ?? $generator.string)(),
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                            ]),
                        ),
                    () =>
                        new Map(
                            (generator?.array ?? $generator.array)(() => [
                                (generator?.array ?? $generator.array)(
                                    () =>
                                        (
                                            generator?.customs ??
                                            $generator.customs
                                        )?.number?.([]) ??
                                        (
                                            generator?.number ??
                                            $generator.number
                                        )(0, 100),
                                ),
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                            ]),
                        ),
                    () =>
                        new Map(
                            (generator?.array ?? $generator.array)(() => [
                                $ro0(),
                                (
                                    generator?.customs ?? $generator.customs
                                )?.number?.([]) ??
                                    (generator?.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                            ]),
                        ),
                ])(),
            );
        })((MapUnion as any).RANDOM),
    assert: (input: any): MapUnion => {
        const __is = (input: any): input is MapUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        elem instanceof Map &&
                        (() => {
                            const array = [...elem];
                            const top = elem.entries().next().value;
                            if (0 === elem.size) return true;
                            const arrayPredicators = [
                                [
                                    (top: any[]): any =>
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "boolean" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "number" === typeof elem[0] &&
                                                Number.isFinite(elem[0]) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "string" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        Array.isArray(top[0]) &&
                                        top[0].every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                Array.isArray(elem[0]) &&
                                                elem[0].every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "object" === typeof top[0] &&
                                        null !== top[0] &&
                                        $io0(top[0]) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.length === 2 &&
                                                "object" === typeof elem[0] &&
                                                null !== elem[0] &&
                                                $io0(elem[0]) &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]),
                                        ),
                                ] as const,
                            ];
                            const passed = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length)
                                return passed[0]![1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is MapUnion => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
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
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "MapUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((elem instanceof Map ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Map<Array<number>, number> | Map<MapUnion.Person, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)",
                                        value: elem,
                                    })) &&
                                    (() => {
                                        const array = [...elem];
                                        const top = elem.entries().next().value;
                                        if (0 === elem.size) return true;
                                        const arrayPredicators = [
                                            [
                                                (top: any[]): any =>
                                                    "boolean" ===
                                                        typeof top[0] &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        "[boolean, number]",
                                                                    value: elem,
                                                                })) &&
                                                                (elem.length ===
                                                                    2 ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index2 +
                                                                                "]",
                                                                            expected:
                                                                                "[boolean, number]",
                                                                            value: elem,
                                                                        },
                                                                    )) &&
                                                                ("boolean" ===
                                                                    typeof elem[0] ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index2 +
                                                                                "][0]",
                                                                            expected:
                                                                                "boolean",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index2 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ))) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "[boolean, number]",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "number" ===
                                                        typeof top[0] &&
                                                    Number.isFinite(top[0]) &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index3: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index3 +
                                                                        "]",
                                                                    expected:
                                                                        "[number, number]",
                                                                    value: elem,
                                                                })) &&
                                                                (elem.length ===
                                                                    2 ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index3 +
                                                                                "]",
                                                                            expected:
                                                                                "[number, number]",
                                                                            value: elem,
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[0] &&
                                                                    Number.isFinite(
                                                                        elem[0],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index3 +
                                                                                "][0]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index3 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ))) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "[number, number]",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "string" ===
                                                        typeof top[0] &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index4: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index4 +
                                                                        "]",
                                                                    expected:
                                                                        "[string, number]",
                                                                    value: elem,
                                                                })) &&
                                                                (elem.length ===
                                                                    2 ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index4 +
                                                                                "]",
                                                                            expected:
                                                                                "[string, number]",
                                                                            value: elem,
                                                                        },
                                                                    )) &&
                                                                ("string" ===
                                                                    typeof elem[0] ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index4 +
                                                                                "][0]",
                                                                            expected:
                                                                                "string",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index4 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ))) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "[string, number]",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    Array.isArray(top[0]) &&
                                                    top[0].every(
                                                        (
                                                            elem: any,
                                                            _index5: number,
                                                        ) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
                                                    ) &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index6: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index6 +
                                                                        "]",
                                                                    expected:
                                                                        "[Array<number>, number]",
                                                                    value: elem,
                                                                })) &&
                                                                (elem.length ===
                                                                    2 ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index6 +
                                                                                "]",
                                                                            expected:
                                                                                "[Array<number>, number]",
                                                                            value: elem,
                                                                        },
                                                                    )) &&
                                                                (((Array.isArray(
                                                                    elem[0],
                                                                ) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index6 +
                                                                                "][0]",
                                                                            expected:
                                                                                "Array<number>",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                    elem[0].every(
                                                                        (
                                                                            elem: any,
                                                                            _index7: number,
                                                                        ) =>
                                                                            ("number" ===
                                                                                typeof elem &&
                                                                                Number.isFinite(
                                                                                    elem,
                                                                                )) ||
                                                                            $guard(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index6 +
                                                                                        "][0][" +
                                                                                        _index7 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "number",
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index6 +
                                                                                "][0]",
                                                                            expected:
                                                                                "Array<number>",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index6 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ))) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index6 +
                                                                    "]",
                                                                expected:
                                                                    "[Array<number>, number]",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "object" ===
                                                        typeof top[0] &&
                                                    null !== top[0] &&
                                                    $ao0(
                                                        top[0],
                                                        _path + [0],
                                                        false,
                                                    ) &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index8: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index8 +
                                                                        "]",
                                                                    expected:
                                                                        "[MapUnion.Person, number]",
                                                                    value: elem,
                                                                })) &&
                                                                (elem.length ===
                                                                    2 ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index8 +
                                                                                "]",
                                                                            expected:
                                                                                "[MapUnion.Person, number]",
                                                                            value: elem,
                                                                        },
                                                                    )) &&
                                                                (((("object" ===
                                                                    typeof elem[0] &&
                                                                    null !==
                                                                        elem[0]) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index8 +
                                                                                "][0]",
                                                                            expected:
                                                                                "MapUnion.Person",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                    $ao0(
                                                                        elem[0],
                                                                        _path +
                                                                            "[" +
                                                                            _index1 +
                                                                            "][" +
                                                                            _index8 +
                                                                            "][0]",
                                                                        true,
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index8 +
                                                                                "][0]",
                                                                            expected:
                                                                                "MapUnion.Person",
                                                                            value: elem[0],
                                                                        },
                                                                    )) &&
                                                                (("number" ===
                                                                    typeof elem[1] &&
                                                                    Number.isFinite(
                                                                        elem[1],
                                                                    )) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index8 +
                                                                                "][1]",
                                                                            expected:
                                                                                "number",
                                                                            value: elem[1],
                                                                        },
                                                                    ))) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index8 +
                                                                    "]",
                                                                expected:
                                                                    "[MapUnion.Person, number]",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                        ];
                                        const passed = arrayPredicators.filter(
                                            (pred: any) => pred[0](top),
                                        );
                                        if (1 === passed.length)
                                            return passed[0]![1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
                                        return $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Map<boolean, number> | Map<number, number> | Map<string, number> | Map<Array<number>, number> | Map<MapUnion.Person, number>)",
                                            value: elem,
                                        });
                                    })()) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Map<Array<number>, number> | Map<MapUnion.Person, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "MapUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
