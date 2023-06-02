import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_isClone_ArrayRepeatedUnion = _test_isClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            | number
            | boolean
            | Array<string>
            | Array<ArrayRepeatedUnion>
            | Array<ObjectSimple.IBox3D>
        > | null => {
            const is: any = (
                input: any,
            ): input is
                | number
                | boolean
                | Array<string>
                | Array<ArrayRepeatedUnion>
                | Array<ObjectSimple.IBox3D> => {
                const $ip0: any = () => {
                    const array: any = input;
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
            const clone: any = (
                input:
                    | number
                    | boolean
                    | Array<string>
                    | Array<ArrayRepeatedUnion>
                    | Array<ObjectSimple.IBox3D>,
            ): typia.Primitive<
                | number
                | boolean
                | Array<string>
                | Array<ArrayRepeatedUnion>
                | Array<ObjectSimple.IBox3D>
            > => {
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
                const $throws: any = (typia.isClone as any).throws;
                const $cp0: any = () => {
                    const array: any = input;
                    const top: any = array[0];
                    if (0 === input.length) return true;
                    const arrayPredicators: any = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.map((elem: any) => elem as any),
                        ],
                        [
                            (top: any): any =>
                                null !== top &&
                                undefined !== top &&
                                ("number" === typeof top ||
                                    "boolean" === typeof top ||
                                    (Array.isArray(top) && $cp0(top))),
                            (entire: any[]): any => $ca0(entire),
                        ],
                        [
                            (top: any): any =>
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
                            "(Array<string> | Array<ArrayRepeatedUnion> | Array<ObjectSimple.IBox3D>)",
                        value: input,
                    });
                };
                const $co0: any = (input: any): any => ({
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
                        "object" === typeof input.rotate &&
                        null !== input.rotate
                            ? $co1(input.rotate)
                            : (input.rotate as any),
                    pivot:
                        "object" === typeof input.pivot && null !== input.pivot
                            ? $co1(input.pivot)
                            : (input.pivot as any),
                });
                const $co1: any = (input: any): any => ({
                    x: input.x as any,
                    y: input.y as any,
                    z: input.z as any,
                });
                const $ca0: any = (input: any): any =>
                    input.map((elem: any) =>
                        Array.isArray(elem) ? $cp0(elem) : (elem as any),
                    );
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ArrayRepeatedUnion.SPOILERS,
);
