import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertPrune_DynamicUnion = _test_assertPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.assertPrune<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
