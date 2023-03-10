import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createIsPrune_DynamicUnion = _test_isPrune(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createIsPrune<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
