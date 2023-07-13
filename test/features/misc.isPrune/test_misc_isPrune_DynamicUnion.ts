import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_isPrune_DynamicUnion = _test_misc_isPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.misc.isPrune(input),
    DynamicUnion.SPOILERS,
);
