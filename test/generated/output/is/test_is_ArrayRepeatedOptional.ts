import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_is_ArrayRepeatedOptional = _test_is(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input) =>
        ((
            input: any,
        ): input is
            | string
            | number
            | Array<ArrayRepeatedOptional>
            | undefined => {
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        (undefined === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && $ia0(elem))),
                );
            return (
                null !== input &&
                (undefined === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && $ia0(input)))
            );
        })(input),
    ArrayRepeatedOptional.SPOILERS,
);
