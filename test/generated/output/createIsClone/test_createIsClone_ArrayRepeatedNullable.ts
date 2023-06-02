import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_createIsClone_ArrayRepeatedNullable = _test_isClone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input: any): typia.Primitive<ArrayRepeatedNullable> | null => {
        const is: any = (input: any): input is ArrayRepeatedNullable => {
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && $ia0(elem))),
                );
            return (
                undefined !== input &&
                (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && $ia0(input)))
            );
        };
        const clone: any = (
            input: ArrayRepeatedNullable,
        ): typia.Primitive<ArrayRepeatedNullable> => {
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
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ArrayRepeatedNullable.SPOILERS,
);
