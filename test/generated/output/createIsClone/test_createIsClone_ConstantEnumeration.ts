import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createIsClone_ConstantEnumeration = _test_isClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: any): typia.Primitive<ConstantEnumeration> | null => {
        const is: any = (input: any): input is ConstantEnumeration => {
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
            input: ConstantEnumeration,
        ): typia.Primitive<ConstantEnumeration> => {
            return Array.isArray(input)
                ? (() => input.map((elem: any) => elem as any))()
                : (input as any);
        };
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    ConstantEnumeration.SPOILERS,
);
