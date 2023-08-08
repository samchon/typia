import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_json_isParse_ArrayRepeatedNullable = _test_json_isParse(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input: any): typia.Primitive<ArrayRepeatedNullable> => {
        const is = (input: any): input is ArrayRepeatedNullable => {
            const $ia0 = (input: any): any =>
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && ($ia0(elem) || false))),
                );
            return (
                undefined !== input &&
                (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && ($ia0(input) || false)))
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ArrayRepeatedNullable.SPOILERS,
);
