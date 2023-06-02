import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createRandom_ArrayUnion = _test_random(
    "ArrayUnion",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ArrayUnion> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $pick: any = (typia.createRandom as any).pick;
        return (generator?.array ?? $generator.array)(() =>
            $pick([
                () =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)(),
                    ),
                () =>
                    (generator?.array ?? $generator.array)(() =>
                        (generator?.boolean ?? $generator.boolean)(),
                    ),
                () =>
                    (generator?.array ?? $generator.array)(
                        () =>
                            (
                                generator?.customs ?? $generator.customs
                            )?.number?.([]) ??
                            (generator?.number ?? $generator.number)(0, 100),
                    ),
            ])(),
        );
    },
    (input: any): typia.Primitive<ArrayUnion> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ArrayUnion> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        (() => {
                            const array: any = elem;
                            const top: any = array[0];
                            if (0 === elem.length) return true;
                            const arrayPredicators: any = [
                                [
                                    (top: any): any => "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any => "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                            ];
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
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
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ArrayUnion> => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayUnion",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<boolean> | Array<number> | Array<string>)",
                                    value: elem,
                                })) &&
                            (() => {
                                const array: any = elem;
                                const top: any = array[0];
                                if (0 === elem.length) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "string" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index2: number) =>
                                                    "string" === typeof elem ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected: "string",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index3: number) =>
                                                    "boolean" === typeof elem ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index3 +
                                                            "]",
                                                        expected: "boolean",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index4: number) =>
                                                    ("number" === typeof elem &&
                                                        Number.isFinite(
                                                            elem,
                                                        )) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "]",
                                                        expected: "number",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                ];
                                const passed: any = arrayPredicators.filter(
                                    (pred: any) => pred[0](top),
                                );
                                if (1 === passed.length)
                                    return passed[0][1](array);
                                else if (1 < passed.length)
                                    for (const pred of passed)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === pred[0](value),
                                            )
                                        )
                                            return pred[1](array);
                                return $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string> | Array<boolean> | Array<number>)",
                                    value: elem,
                                });
                            })(),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
