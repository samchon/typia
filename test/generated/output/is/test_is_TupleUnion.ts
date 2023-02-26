import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_is_TupleUnion = _test_is(
    "TupleUnion",
    TupleUnion.generate,
    (input) =>
        ((input: any): input is Array<TupleUnion.Union> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
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
    TupleUnion.SPOILERS,
);
