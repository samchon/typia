import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_isClone_ArrayRepeatedUnionWithTuple = _test_misc_isClone(
    "ArrayRepeatedUnionWithTuple",
)<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
    (input: any): typia.Resolved<ArrayRepeatedUnionWithTuple> | null => {
        const is = (input: any): input is ArrayRepeatedUnionWithTuple => {
            const $ip0 = (input: any) => {
                const array = input;
                const tuplePredicators = [
                    [
                        (top: any[]): any =>
                            top.length === 3 &&
                            "string" === typeof top[0] &&
                            "number" === typeof top[1] &&
                            Number.isFinite(top[1]) &&
                            "boolean" === typeof top[2],
                        (entire: any[]): any =>
                            entire.length === 3 &&
                            "string" === typeof entire[0] &&
                            "number" === typeof entire[1] &&
                            Number.isFinite(entire[1]) &&
                            "boolean" === typeof entire[2],
                    ],
                    [
                        (top: any[]): any =>
                            top.length === 2 &&
                            "object" === typeof top[0] &&
                            null !== top[0] &&
                            $io0(top[0]) &&
                            "object" === typeof top[1] &&
                            null !== top[1] &&
                            $io1(top[1]),
                        (entire: any[]): any =>
                            entire.length === 2 &&
                            "object" === typeof entire[0] &&
                            null !== entire[0] &&
                            $io0(entire[0]) &&
                            "object" === typeof entire[1] &&
                            null !== entire[1] &&
                            $io1(entire[1]),
                    ],
                ];
                for (const pred of tuplePredicators)
                    if (pred[0](array)) return pred[1](array);
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
                            ),
                    ],
                    [
                        (top: any[]): any =>
                            null !== top &&
                            undefined !== top &&
                            (("number" === typeof top &&
                                Number.isFinite(top)) ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip0(top) || false))),
                        (entire: any[]): any => $ia0(entire) || false,
                    ],
                    [
                        (top: any[]): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            const $io0 = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                "number" === typeof (input.scale as any).x &&
                Number.isFinite((input.scale as any).x) &&
                "number" === typeof (input.scale as any).y &&
                Number.isFinite((input.scale as any).y) &&
                "number" === typeof (input.scale as any).z &&
                Number.isFinite((input.scale as any).z) &&
                "object" === typeof input.position &&
                null !== input.position &&
                "number" === typeof (input.position as any).x &&
                Number.isFinite((input.position as any).x) &&
                "number" === typeof (input.position as any).y &&
                Number.isFinite((input.position as any).y) &&
                "number" === typeof (input.position as any).z &&
                Number.isFinite((input.position as any).z) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                "number" === typeof (input.rotate as any).x &&
                Number.isFinite((input.rotate as any).x) &&
                "number" === typeof (input.rotate as any).y &&
                Number.isFinite((input.rotate as any).y) &&
                "number" === typeof (input.rotate as any).z &&
                Number.isFinite((input.rotate as any).z) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                "number" === typeof (input.pivot as any).x &&
                Number.isFinite((input.pivot as any).x) &&
                "number" === typeof (input.pivot as any).y &&
                Number.isFinite((input.pivot as any).y) &&
                "number" === typeof (input.pivot as any).z &&
                Number.isFinite((input.pivot as any).z);
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                "number" === typeof input.z &&
                Number.isFinite(input.z);
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && ($ip0(elem) || false))),
                );
            return (
                null !== input &&
                undefined !== input &&
                (("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && ($ip0(input) || false)))
            );
        };
        const clone = (
            input: ArrayRepeatedUnionWithTuple,
        ): typia.Resolved<ArrayRepeatedUnionWithTuple> => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.scale &&
                null !== input.scale &&
                $io1(input.scale) &&
                "object" === typeof input.position &&
                null !== input.position &&
                $io1(input.position) &&
                "object" === typeof input.rotate &&
                null !== input.rotate &&
                $io1(input.rotate) &&
                "object" === typeof input.pivot &&
                null !== input.pivot &&
                $io1(input.pivot);
            const $io1 = (input: any): boolean =>
                "number" === typeof input.x &&
                "number" === typeof input.y &&
                "number" === typeof input.z;
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("number" === typeof elem ||
                            "boolean" === typeof elem ||
                            (Array.isArray(elem) && ($ip1(elem) || false))),
                );
            const $throws = (typia.misc.createIsClone as any).throws;
            const $cp0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return [];
                const arrayPredicators = [
                    [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any[]): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip1(top) || false))),
                        (entire: any[]): any => $ca0(entire),
                    ],
                    [
                        (top: any[]): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            entire.map((elem: any) =>
                                "object" === typeof elem && null !== elem
                                    ? $co0(elem)
                                    : (elem as any),
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                $throws({
                    expected:
                        "(Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>)",
                    value: input,
                });
            };
            const $ip1 = (input: any) => {
                const array = input;
                const tuplePredicators = [
                    [
                        (top: any[]): any =>
                            top.length === 3 &&
                            "string" === typeof top[0] &&
                            "number" === typeof top[1] &&
                            "boolean" === typeof top[2],
                        (entire: any[]): any =>
                            entire.length === 3 &&
                            "string" === typeof entire[0] &&
                            "number" === typeof entire[1] &&
                            "boolean" === typeof entire[2],
                    ],
                    [
                        (top: any[]): any =>
                            top.length === 2 &&
                            "object" === typeof top[0] &&
                            null !== top[0] &&
                            $io0(top[0]) &&
                            "object" === typeof top[1] &&
                            null !== top[1] &&
                            $io1(top[1]),
                        (entire: any[]): any =>
                            entire.length === 2 &&
                            "object" === typeof entire[0] &&
                            null !== entire[0] &&
                            $io0(entire[0]) &&
                            "object" === typeof entire[1] &&
                            null !== entire[1] &&
                            $io1(entire[1]),
                    ],
                ];
                for (const pred of tuplePredicators)
                    if (pred[0](array)) return pred[1](array);
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                    [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
                            ),
                    ],
                    [
                        (top: any[]): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip1(top) || false))),
                        (entire: any[]): any => $ia0(entire) || false,
                    ],
                    [
                        (top: any[]): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            ),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            const $co0 = (input: any): any => ({
                scale:
                    "object" === typeof input.scale && null !== input.scale
                        ? $co1(input.scale)
                        : (input.scale as any),
                position:
                    "object" === typeof input.position &&
                    null !== input.position
                        ? $co1(input.position)
                        : (input.position as any),
                rotate:
                    "object" === typeof input.rotate && null !== input.rotate
                        ? $co1(input.rotate)
                        : (input.rotate as any),
                pivot:
                    "object" === typeof input.pivot && null !== input.pivot
                        ? $co1(input.pivot)
                        : (input.pivot as any),
            });
            const $co1 = (input: any): any => ({
                x: input.x as any,
                y: input.y as any,
                z: input.z as any,
            });
            const $ca0 = (input: any): any =>
                input.map((elem: any) =>
                    Array.isArray(elem) &&
                    elem.length === 3 &&
                    "string" === typeof elem[0] &&
                    "number" === typeof elem[1] &&
                    "boolean" === typeof elem[2]
                        ? ([
                              elem[0] as any,
                              elem[1] as any,
                              elem[2] as any,
                          ] as any)
                        : Array.isArray(elem) &&
                          elem.length === 2 &&
                          "object" === typeof elem[0] &&
                          null !== elem[0] &&
                          $io0(elem[0]) &&
                          "object" === typeof elem[1] &&
                          null !== elem[1] &&
                          $io1(elem[1])
                        ? ([
                              "object" === typeof elem[0] && null !== elem[0]
                                  ? $co0(elem[0])
                                  : (elem[0] as any),
                              "object" === typeof elem[1] && null !== elem[1]
                                  ? $co1(elem[1])
                                  : (elem[1] as any),
                          ] as any)
                        : Array.isArray(elem)
                        ? $cp0(elem)
                        : (elem as any),
                );
            return Array.isArray(input) &&
                input.length === 3 &&
                "string" === typeof input[0] &&
                "number" === typeof input[1] &&
                "boolean" === typeof input[2]
                ? ([input[0] as any, input[1] as any, input[2] as any] as any)
                : Array.isArray(input) &&
                  input.length === 2 &&
                  "object" === typeof input[0] &&
                  null !== input[0] &&
                  $io0(input[0]) &&
                  "object" === typeof input[1] &&
                  null !== input[1] &&
                  $io1(input[1])
                ? ([
                      "object" === typeof input[0] && null !== input[0]
                          ? $co0(input[0])
                          : (input[0] as any),
                      "object" === typeof input[1] && null !== input[1]
                          ? $co1(input[1])
                          : (input[1] as any),
                  ] as any)
                : Array.isArray(input)
                ? $cp0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
);
