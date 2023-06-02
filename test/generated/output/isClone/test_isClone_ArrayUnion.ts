import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_isClone_ArrayUnion = _test_isClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArrayUnion.IUnion>> | null => {
            const is: any = (input: any): input is Array<ArrayUnion.IUnion> => {
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
                                        (top: any): any =>
                                            "string" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any) =>
                                                    "string" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
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
                                if (1 === passed.length)
                                    return passed[0][1](array);
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
            const clone: any = (
                input: Array<ArrayUnion.IUnion>,
            ): typia.Primitive<Array<ArrayUnion.IUnion>> => {
                const $throws: any = (typia.isClone as any).throws;
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              Array.isArray(elem)
                                  ? (() => {
                                        const array: any = elem;
                                        const top: any = array[0];
                                        if (0 === elem.length) return true;
                                        const arrayPredicators: any = [
                                            [
                                                (top: any): any =>
                                                    "string" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "boolean" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "number" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                        ];
                                        const passed: any =
                                            arrayPredicators.filter(
                                                (pred: any) => pred[0](top),
                                            );
                                        if (1 === passed.length)
                                            return passed[0][1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
                                        $throws({
                                            expected:
                                                "(Array<string> | Array<boolean> | Array<number>)",
                                            value: elem,
                                        });
                                    })()
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ArrayUnion.SPOILERS,
);
