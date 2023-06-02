import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_clone_ArrayRepeatedNullable = _test_clone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) =>
        ((
            input: string | number | Array<ArrayRepeatedNullable> | null,
        ): typia.Primitive<
            string | number | Array<ArrayRepeatedNullable> | null
        > => {
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            "number" === typeof elem ||
                            (Array.isArray(elem) && $ia0(elem))),
                );
            const $cp0: any = (input: any) => $ca0(input);
            const $ca0: any = (input: any): any =>
                input.map((elem: any) =>
                    Array.isArray(elem) ? $cp0(elem) : (elem as any),
                );
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
