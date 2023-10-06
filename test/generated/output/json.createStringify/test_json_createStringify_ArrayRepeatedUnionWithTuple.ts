import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_createStringify_ArrayRepeatedUnionWithTuple =
    _test_json_stringify(
        "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
        (input: ArrayRepeatedUnionWithTuple): string => {
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
            const $number = (typia.json.createStringify as any).number;
            const $string = (typia.json.createStringify as any).string;
            const $throws = (typia.json.createStringify as any).throws;
            const $sp0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return "[]";
                const arrayPredicators = [
                    [
                        (top: any[]): any => "string" === typeof top,
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $string(elem))
                                .join(",")}]`,
                    ] as const,
                    [
                        (top: any[]): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip1(top) || false))),
                        (entire: any[]): any => $sa0(entire),
                    ] as const,
                    [
                        (top: any[]): any =>
                            "object" === typeof top &&
                            null !== top &&
                            $io0(top),
                        (entire: any[]): any =>
                            `[${entire
                                .map((elem: any) => $so0(elem))
                                .join(",")}]`,
                    ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
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
                    ] as const,
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
                    ] as const,
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
                    ] as const,
                    [
                        (top: any[]): any =>
                            null !== top &&
                            undefined !== top &&
                            ("number" === typeof top ||
                                "boolean" === typeof top ||
                                (Array.isArray(top) && ($ip1(top) || false))),
                        (entire: any[]): any => $ia0(entire) || false,
                    ] as const,
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
                    ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            const $so0 = (input: any): any =>
                `{"scale":${`{"x":${$number(
                    (input.scale as any).x,
                )},"y":${$number((input.scale as any).y)},"z":${$number(
                    (input.scale as any).z,
                )}}`},"position":${`{"x":${$number(
                    (input.position as any).x,
                )},"y":${$number((input.position as any).y)},"z":${$number(
                    (input.position as any).z,
                )}}`},"rotate":${`{"x":${$number(
                    (input.rotate as any).x,
                )},"y":${$number((input.rotate as any).y)},"z":${$number(
                    (input.rotate as any).z,
                )}}`},"pivot":${`{"x":${$number(
                    (input.pivot as any).x,
                )},"y":${$number((input.pivot as any).y)},"z":${$number(
                    (input.pivot as any).z,
                )}}`}}`;
            const $sa0 = (input: any): any =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            if ("number" === typeof elem) return $number(elem);
                            if ("boolean" === typeof elem) return elem;
                            if (
                                Array.isArray(elem) &&
                                elem.length === 3 &&
                                "string" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                "boolean" === typeof elem[2]
                            )
                                return `[${$string(elem[0])},${$number(
                                    elem[1],
                                )},${elem[2]}]`;
                            if (
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "object" === typeof elem[0] &&
                                null !== elem[0] &&
                                $io0(elem[0]) &&
                                "object" === typeof elem[1] &&
                                null !== elem[1] &&
                                $io1(elem[1])
                            )
                                return `[${$so0(elem[0])},${`{"x":${$number(
                                    (elem[1] as any).x,
                                )},"y":${$number(
                                    (elem[1] as any).y,
                                )},"z":${$number((elem[1] as any).z)}}`}]`;
                            if (Array.isArray(elem)) return $sp0(elem);
                            $throws({
                                expected:
                                    "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            return (() => {
                if ("number" === typeof input) return $number(input).toString();
                if ("boolean" === typeof input) return input.toString();
                if (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "string" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    "boolean" === typeof input[2]
                )
                    return `[${$string(input[0])},${$number(input[1])},${
                        input[2]
                    }]`;
                if (
                    Array.isArray(input) &&
                    input.length === 2 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1])
                )
                    return `[${$so0(input[0])},${`{"x":${$number(
                        (input[1] as any).x,
                    )},"y":${$number((input[1] as any).y)},"z":${$number(
                        (input[1] as any).z,
                    )}}`}]`;
                if (Array.isArray(input)) return $sp0(input);
                $throws({
                    expected:
                        "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                    value: input,
                });
            })();
        },
    );
