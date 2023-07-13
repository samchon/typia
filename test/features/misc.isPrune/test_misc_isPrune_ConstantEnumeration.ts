import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_isPrune_ConstantEnumeration = _test_misc_isPrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.misc.isPrune(input),
    ConstantEnumeration.SPOILERS,
);
