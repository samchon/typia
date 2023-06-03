import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_isClone_ConstantEnumeration = _test_isClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<Array<ConstantEnumeration.Enumeration>> | null => {
            const is = (
                input: any,
            ): input is Array<ConstantEnumeration.Enumeration> => {
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
            const clone = (
                input: Array<ConstantEnumeration.Enumeration>,
            ): typia.Primitive<Array<ConstantEnumeration.Enumeration>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    ConstantEnumeration.SPOILERS,
);
