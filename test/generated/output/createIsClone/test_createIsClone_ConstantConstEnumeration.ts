import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createIsClone_ConstantConstEnumeration = _test_isClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input: any): typia.Primitive<ConstantConstEnumeration> | null => {
        const is: any = (input: any): input is ConstantConstEnumeration => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        0 === elem ||
                        1 === elem ||
                        2 === elem ||
                        "Three" === elem ||
                        "Four" === elem,
                )
            );
        };
        const clone: any = (
            input: ConstantConstEnumeration,
        ): typia.Primitive<ConstantConstEnumeration> => {
            return Array.isArray(input)
                ? (() => input.map((elem: any) => elem as any))()
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ConstantConstEnumeration.SPOILERS,
);
