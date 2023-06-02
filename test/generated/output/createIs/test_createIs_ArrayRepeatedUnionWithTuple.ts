import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_createIs_ArrayRepeatedUnionWithTuple = _test_is(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input: any): input is ArrayRepeatedUnionWithTuple => {
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
                        entire.every((elem: any) => "string" === typeof elem),
                ],
                [
                    (top: any): any =>
                        null !== top &&
                        undefined !== top &&
                        (("number" === typeof top && Number.isFinite(top)) ||
                            "boolean" === typeof top ||
                            (Array.isArray(top) && $ip0(top))),
                    (entire: any[]): any => $ia0(entire),
                ],
                [
                    (top: any): any =>
                        "object" === typeof top && null !== top && $io0(top),
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
                    if (array.every((value: any) => true === pred[0](value)))
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
                    (("number" === typeof elem && Number.isFinite(elem)) ||
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
    },
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
