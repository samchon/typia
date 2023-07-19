import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_misc_isPrune_ConstantEnumeration =
    _test_misc_isPrune<ConstantEnumeration>(ConstantEnumeration)((input) =>
        ((input: any): input is Array<ConstantEnumeration.Enumeration> => {
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
            const prune = (
                input: Array<ConstantEnumeration.Enumeration>,
            ): void => {};
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    );
