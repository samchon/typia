import typia from "../../../../src";
import { TupleUnion } from "../../../structures/TupleUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TupleUnion = _test_equals(
    "TupleUnion",
    TupleUnion.generate,
    (input) =>
        ((input: any, _exceptionable: boolean = true): input is TupleUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        (() => {
                            const tupleList = [
                                [
                                    (top: any) =>
                                        elem.length === 3 &&
                                        "number" === typeof elem[0] &&
                                        Number.isFinite(elem[0]) &&
                                        "string" === typeof elem[1] &&
                                        "boolean" === typeof elem[2],
                                    (top: any) =>
                                        top.length === 3 &&
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "string" === typeof top[1] &&
                                        "boolean" === typeof top[2],
                                ],
                                [
                                    (top: any) =>
                                        elem.length === 2 &&
                                        "boolean" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Number.isFinite(elem[1]),
                                    (top: any) =>
                                        top.length === 2 &&
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                ],
                                [
                                    (top: any) => elem.length === 0,
                                    (top: any) => top.length === 0,
                                ],
                            ];
                            const front = elem;
                            const filtered = tupleList.filter(
                                (tuple) => true === tuple[0](front),
                            );
                            if (1 === filtered.length)
                                return filtered[0][1](elem);
                            const array = elem;
                            if (1 < filtered.length)
                                for (const tuple of filtered)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            return false;
                        })(),
                )
            );
        })(input),
);
