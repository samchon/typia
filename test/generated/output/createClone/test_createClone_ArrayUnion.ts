import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createClone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: ArrayUnion): typia.Primitive<ArrayUnion> => {
        const $throws: any = (typia.createClone as any).throws;
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
                                                (elem: any) => elem as any,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
                                        (entire: any[]): any =>
                                            entire.map(
                                                (elem: any) => elem as any,
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top,
                                        (entire: any[]): any =>
                                            entire.map(
                                                (elem: any) => elem as any,
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
                                $throws({
                                    expected:
                                        "(Array<string> | Array<boolean> | Array<number>)",
                                    value: elem,
                                });
                            })()
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
