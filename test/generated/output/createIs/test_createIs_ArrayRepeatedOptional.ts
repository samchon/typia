import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_createIs_ArrayRepeatedOptional = _test_is(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input: any): input is ArrayRepeatedOptional => {
        const $ia0 = (input: any): any =>
            input.every(
                (elem: any) =>
                    null !== elem &&
                    (undefined === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        (Array.isArray(elem) && ($ia0(elem) || false))),
            );
        return (
            null !== input &&
            (undefined === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
        );
    },
    ArrayRepeatedOptional.SPOILERS,
);
