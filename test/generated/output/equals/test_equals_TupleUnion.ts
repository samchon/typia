import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_equals_TupleUnion = _test_equals(
    "TupleUnion",
    TupleUnion.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is Array<TupleUnion.Union> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
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
                                    (top: any[]): any => top.length === 0,
                                    (entire: any[]): any => entire.length === 0,
                                ],
                            ];
                            for (const pred of tuplePredicators)
                                if (pred[0](array)) return pred[1](array);
                            return false;
                        })(),
                )
            );
        })(input),
);
