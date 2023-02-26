import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_isPrune_DynamicEnumeration = _test_isPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.isPrune(input),
    DynamicEnumeration.SPOILERS,
);
