import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_createIs_FunctionalArrayUnion = _test_is(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input: any): input is FunctionalArrayUnion => {
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
                                        (elem: any) => "string" === typeof elem,
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
                            [
                                (top: any) => "function" === typeof top,
                                (top: any) =>
                                    top.every(
                                        (elem: any) =>
                                            "function" === typeof elem,
                                    ),
                            ],
                            [
                                (top: any) => undefined !== top && null === top,
                                (top: any) =>
                                    top.every(
                                        (elem: any) =>
                                            undefined !== elem && null === elem,
                                    ),
                            ],
                        ];
                        const front = elem[0];
                        const filtered = tupleList.filter(
                            (tuple) => true === tuple[0](front),
                        );
                        if (1 === filtered.length) return filtered[0][1](elem);
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
    },
    FunctionalArrayUnion.SPOILERS,
);
