import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_createIsParse_ArrayRepeatedNullable = _test_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input: any): typia.Primitive<ArrayRepeatedNullable> => {
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ArrayRepeatedNullable.SPOILERS,
);
