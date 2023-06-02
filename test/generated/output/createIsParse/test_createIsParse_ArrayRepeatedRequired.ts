import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_createIsParse_ArrayRepeatedRequired = _test_isParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input: any): typia.Primitive<ArrayRepeatedRequired> => {
        const is: any = (input: any): input is ArrayRepeatedRequired => {
            const $ia0: any = (input: any): any =>
                input.every(
                    (elem: any) =>
                        null !== elem &&
                        undefined !== elem &&
                        ("string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            (Array.isArray(elem) && $ia0(elem))),
                );
            return (
                null !== input &&
                undefined !== input &&
                ("string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    (Array.isArray(input) && $ia0(input)))
            );
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
    ArrayRepeatedRequired.SPOILERS,
);
