import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_clone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((
            input: Array<ArrayUnion.IUnion>,
        ): typia.Primitive<Array<ArrayUnion.IUnion>> => {
            const $throws = (typia.clone as any).throws;
            const $cp0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return [];
                const arrayPredicators = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any): any => "number" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                $throws({
                    expected:
                        "(Array<string> | Array<boolean> | Array<number>)",
                    value: input,
                });
            };
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    Array.isArray(elem) ? $cp0(elem) : (elem as any),
                );
            return Array.isArray(input) ? $cp1(input) : (input as any);
        })(input),
);
