import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_createRandom_TupleUnion = _test_random(
    "TupleUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<TupleUnion> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $pick: any = (typia.createRandom as any).pick;
        return (generator?.array ?? $generator.array)(() =>
            $pick([
                () => [
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                        (generator?.number ?? $generator.number)(0, 100),
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                        (generator?.string ?? $generator.string)(),
                    (generator?.boolean ?? $generator.boolean)(),
                ],
                () => [
                    (generator?.boolean ?? $generator.boolean)(),
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                        (generator?.number ?? $generator.number)(0, 100),
                ],
                () => [],
            ])(),
        );
    },
    (input: any): typia.Primitive<TupleUnion> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<TupleUnion> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        (() => {
                            const array: any = elem;
                            const tuplePredicators: any = [
                                [
                                    (top: any[]): any =>
                                        top.length === 3 &&
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "string" === typeof top[1] &&
                                        "boolean" === typeof top[2],
                                    (entire: any[]): any =>
                                        entire.length === 3 &&
                                        "number" === typeof entire[0] &&
                                        Number.isFinite(entire[0]) &&
                                        "string" === typeof entire[1] &&
                                        "boolean" === typeof entire[2],
                                ],
                                [
                                    (top: any[]): any =>
                                        top.length === 2 &&
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (entire: any[]): any =>
                                        entire.length === 2 &&
                                        "boolean" === typeof entire[0] &&
                                        "number" === typeof entire[1] &&
                                        Number.isFinite(entire[1]),
                                ],
                                [
                                    (top: any[]): any =>
                                        0 <= top.length &&
                                        1 >= top.length &&
                                        true,
                                    (entire: any[]): any =>
                                        0 <= entire.length &&
                                        1 >= entire.length &&
                                        true,
                                ],
                            ];
                            for (const pred of tuplePredicators)
                                if (pred[0](array)) return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TupleUnion> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<[boolean, number] | [number, string, boolean] | [unknown?]>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "([boolean, number] | [number, string, boolean] | [unknown?])",
                                    value: elem,
                                })) &&
                            (() => {
                                const array: any = elem;
                                const tuplePredicators: any = [
                                    [
                                        (top: any[]): any =>
                                            top.length === 3 &&
                                            "number" === typeof top[0] &&
                                            Number.isFinite(top[0]) &&
                                            "string" === typeof top[1] &&
                                            "boolean" === typeof top[2],
                                        (entire: any[]): any =>
                                            (entire.length === 3 ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "[number, string, boolean]",
                                                    value: entire,
                                                })) &&
                                            (("number" === typeof entire[0] &&
                                                Number.isFinite(entire[0])) ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][0]",
                                                    expected: "number",
                                                    value: entire[0],
                                                })) &&
                                            ("string" === typeof entire[1] ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][1]",
                                                    expected: "string",
                                                    value: entire[1],
                                                })) &&
                                            ("boolean" === typeof entire[2] ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][2]",
                                                    expected: "boolean",
                                                    value: entire[2],
                                                })),
                                    ],
                                    [
                                        (top: any[]): any =>
                                            top.length === 2 &&
                                            "boolean" === typeof top[0] &&
                                            "number" === typeof top[1] &&
                                            Number.isFinite(top[1]),
                                        (entire: any[]): any =>
                                            (entire.length === 2 ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "[boolean, number]",
                                                    value: entire,
                                                })) &&
                                            ("boolean" === typeof entire[0] ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][0]",
                                                    expected: "boolean",
                                                    value: entire[0],
                                                })) &&
                                            (("number" === typeof entire[1] &&
                                                Number.isFinite(entire[1])) ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: entire[1],
                                                })),
                                    ],
                                    [
                                        (top: any[]): any =>
                                            0 <= top.length &&
                                            1 >= top.length &&
                                            true,
                                        (entire: any[]): any =>
                                            ((0 <= entire.length &&
                                                1 >= entire.length) ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "[any]",
                                                    value: entire,
                                                })) &&
                                            true,
                                    ],
                                ];
                                for (const pred of tuplePredicators)
                                    if (pred[0](array)) return pred[1](array);
                                return $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "([number, string, boolean] | [boolean, number] | [unknown?])",
                                    value: elem,
                                });
                            })(),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
