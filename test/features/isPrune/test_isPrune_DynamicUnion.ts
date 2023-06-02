import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_isPrune_DynamicUnion = _test_isPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isPrune(input),
    DynamicUnion.SPOILERS,
);
