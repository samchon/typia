import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_createIs_ArrayRepeatedNullable = _test_is(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input: any): input is ArrayRepeatedNullable => {
        const $ia0 = (input: any): any =>
            input.every(
                (elem: any) =>
                    undefined !== elem &&
                    (null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        (Array.isArray(elem) && ($ia0(elem) || false))),
            );
        return (
            undefined !== input &&
            (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
        );
    },
    ArrayRepeatedNullable.SPOILERS,
);
