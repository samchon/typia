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
                        const array: any = elem;
                        const top: any = array[0];
                        if (0 === elem.length) return true;
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
                                    "number" === typeof top &&
                                    Number.isFinite(top),
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            "number" === typeof elem &&
                                            Number.isFinite(elem),
                                    ),
                            ],
                            [
                                (top: any): any => "function" === typeof top,
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            "function" === typeof elem,
                                    ),
                            ],
                            [
                                (top: any): any =>
                                    undefined !== top && null === top,
                                (entire: any[]): any =>
                                    entire.every(
                                        (elem: any) =>
                                            undefined !== elem && null === elem,
                                    ),
                            ],
                        ];
                        const passed: any = arrayPredicators.filter(
                            (pred: any) => pred[0](top),
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
                    })(),
            )
        );
    },
    FunctionalArrayUnion.SPOILERS,
);
