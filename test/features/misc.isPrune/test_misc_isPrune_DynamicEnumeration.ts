import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_isPrune_DynamicEnumeration = _test_misc_isPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.misc.isPrune(input),
    DynamicEnumeration.SPOILERS,
);
