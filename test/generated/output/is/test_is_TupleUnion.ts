import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_is_TupleUnion = _test_is(
    "TupleUnion",
    TupleUnion.generate,
    (input) =>
        ((input: any): input is TupleUnion => {
            const $ip0 = (input: any) => {
                const array = input;
                const tuplePredicators = [
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
                        (top: any[]): any => top.length === 0,
                        (entire: any[]): any => entire.length === 0,
                    ],
                ];
                for (const pred of tuplePredicators)
                    if (pred[0](array)) return pred[1](array);
                return false;
            };
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
                )
            );
        })(input),
    TupleUnion.SPOILERS,
);
