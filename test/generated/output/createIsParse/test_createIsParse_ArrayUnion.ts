import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createIsParse_ArrayUnion = _test_isParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: any): typia.Primitive<ArrayUnion> => {
        const is: any = (input: any): input is ArrayUnion => {
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
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any => "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
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
                            ];
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ArrayUnion.SPOILERS,
);
