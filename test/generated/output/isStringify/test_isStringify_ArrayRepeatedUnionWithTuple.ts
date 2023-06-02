import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_isStringify_ArrayRepeatedUnionWithTuple = _test_isStringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) =>
        ((
            input:
                | number
                | boolean
                | Array<string>
                | Array<ArrayRepeatedUnionWithTuple>
                | Array<ArrayRepeatedUnionWithTuple.IBox3D>
                | [string, number, boolean]
                | [
                      ArrayRepeatedUnionWithTuple.IBox3D,
                      ArrayRepeatedUnionWithTuple.IPoint3D,
                  ],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is
                | number
                | boolean
                | Array<string>
                | Array<ArrayRepeatedUnionWithTuple>
                | Array<ArrayRepeatedUnionWithTuple.IBox3D>
                | [string, number, boolean]
                | [
                      ArrayRepeatedUnionWithTuple.IBox3D,
                      ArrayRepeatedUnionWithTuple.IPoint3D,
                  ] => {
                const $ip0: any = () => {
                    const array: any = input;
                    const tuplePredicators: any = [
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
                    const top: any = array[0];
                    if (0 === input.length) return true;
                    const arrayPredicators: any = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                (("number" === typeof top &&
                                    Number.isFinite(top)) ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) && $ip0(top))),
                            (entire: any[]): any => $ia0(entire),
                        ],
                        [
                            (top: any): any =>
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
                    const passed: any = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    return false;
                };
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.scale &&
                    null !== input.scale &&
                    "number" === typeof input.scale.x &&
                    Number.isFinite(input.scale.x) &&
                    "number" === typeof input.scale.y &&
                    Number.isFinite(input.scale.y) &&
                    "number" === typeof input.scale.z &&
                    Number.isFinite(input.scale.z) &&
                    "object" === typeof input.position &&
                    null !== input.position &&
                    "number" === typeof input.position.x &&
                    Number.isFinite(input.position.x) &&
                    "number" === typeof input.position.y &&
                    Number.isFinite(input.position.y) &&
                    "number" === typeof input.position.z &&
                    Number.isFinite(input.position.z) &&
                    "object" === typeof input.rotate &&
                    null !== input.rotate &&
                    "number" === typeof input.rotate.x &&
                    Number.isFinite(input.rotate.x) &&
                    "number" === typeof input.rotate.y &&
                    Number.isFinite(input.rotate.y) &&
                    "number" === typeof input.rotate.z &&
                    Number.isFinite(input.rotate.z) &&
                    "object" === typeof input.pivot &&
                    null !== input.pivot &&
                    "number" === typeof input.pivot.x &&
                    Number.isFinite(input.pivot.x) &&
                    "number" === typeof input.pivot.y &&
                    Number.isFinite(input.pivot.y) &&
                    "number" === typeof input.pivot.z &&
                    Number.isFinite(input.pivot.z);
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    "number" === typeof input.z &&
                    Number.isFinite(input.z);
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                (Array.isArray(elem) && $ip0(elem))),
                    );
                return (
                    null !== input &&
                    undefined !== input &&
                    (("number" === typeof input && Number.isFinite(input)) ||
                        "boolean" === typeof input ||
                        (Array.isArray(input) && $ip0(input)))
                );
            };
            const stringify: any = (
                input:
                    | number
                    | boolean
                    | Array<string>
                    | Array<ArrayRepeatedUnionWithTuple>
                    | Array<ArrayRepeatedUnionWithTuple.IBox3D>
                    | [string, number, boolean]
                    | [
                          ArrayRepeatedUnionWithTuple.IBox3D,
                          ArrayRepeatedUnionWithTuple.IPoint3D,
                      ],
            ): string => {
                const $io0: any = (input: any): boolean =>
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
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "number" === typeof input.z;
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            ("number" === typeof elem ||
                                "boolean" === typeof elem ||
                                (Array.isArray(elem) && $ip1(elem))),
                    );
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $throws: any = (typia.isStringify as any).throws;
                const $sp0: any = () => {
                    const array: any = input;
                    const top: any = array[0];
                    if (0 === input.length) return true;
                    const arrayPredicators: any = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                `[${entire
                                    .map((elem: any) => $string(elem))
                                    .join(",")}]`,
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                ("number" === typeof top ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) && $ip1(top))),
                            (entire: any[]): any => $sa0(entire),
                        ],
                        [
                            (top: any): any =>
                                "object" === typeof top &&
                                null !== top &&
                                $io0(top),
                            (entire: any[]): any =>
                                `[${entire
                                    .map((elem: any) => $so0(elem))
                                    .join(",")}]`,
                        ],
                    ];
                    const passed: any = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    $throws({
                        expected:
                            "(Array<string> | Array<ArrayRepeatedUnionWithTuple> | Array<ArrayRepeatedUnionWithTuple.IBox3D>)",
                        value: input,
                    });
                };
                const $ip1: any = () => {
                    const array: any = input;
                    const tuplePredicators: any = [
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
                    const top: any = array[0];
                    if (0 === input.length) return true;
                    const arrayPredicators: any = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                ("number" === typeof top ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) && $ip1(top))),
                            (entire: any[]): any => $ia0(entire),
                        ],
                        [
                            (top: any): any =>
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
                    const passed: any = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    return false;
                };
                const $so0: any = (input: any): any =>
                    `{"scale":${`{"x":${$number(input.scale.x)},"y":${$number(
                        input.scale.y,
                    )},"z":${$number(
                        input.scale.z,
                    )}}`},"position":${`{"x":${$number(
                        input.position.x,
                    )},"y":${$number(input.position.y)},"z":${$number(
                        input.position.z,
                    )}}`},"rotate":${`{"x":${$number(
                        input.rotate.x,
                    )},"y":${$number(input.rotate.y)},"z":${$number(
                        input.rotate.z,
                    )}}`},"pivot":${`{"x":${$number(
                        input.pivot.x,
                    )},"y":${$number(input.pivot.y)},"z":${$number(
                        input.pivot.z,
                    )}}`}}`;
                const $sa0: any = (input: any): any =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if ("number" === typeof elem)
                                    return $number(elem);
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
                                        elem[1].x,
                                    )},"y":${$number(elem[1].y)},"z":${$number(
                                        elem[1].z,
                                    )}}`}]`;
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
                    if ("number" === typeof input)
                        return $number(input).toString();
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
                            input[1].x,
                        )},"y":${$number(input[1].y)},"z":${$number(
                            input[1].z,
                        )}}`}]`;
                    if (Array.isArray(input)) return $sp0(input);
                    $throws({
                        expected:
                            "(Array<ArrayRepeatedUnionWithTuple.IBox3D> | Array<ArrayRepeatedUnionWithTuple> | Array<string> | [IBox3D, IPoint3D] | [string, number, boolean] | boolean | number)",
                        value: input,
                    });
                })();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
