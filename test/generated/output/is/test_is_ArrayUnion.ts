import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_is_ArrayUnion = _test_is(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: any): input is Array<ArrayUnion.IUnion> => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        (() => {
                            if (0 === elem.length) return true;
                            const tupleList = [
                                [
                                    (top: any) => "string" === typeof top,
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any) => "boolean" === typeof top,
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (top: any) =>
                                        top.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                            ];
                            const front = elem[0];
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
    ArrayUnion.SPOILERS,
);
