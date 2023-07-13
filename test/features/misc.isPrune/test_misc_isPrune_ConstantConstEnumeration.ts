import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_isPrune_ConstantConstEnumeration = _test_misc_isPrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.misc.isPrune(input),
    ConstantConstEnumeration.SPOILERS,
);
