import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_DynamicEnumeration = _test_isPrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.isPrune(input),
    DynamicEnumeration.SPOILERS,
);