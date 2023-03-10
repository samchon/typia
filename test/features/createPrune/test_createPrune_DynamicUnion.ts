import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createPrune_DynamicUnion = _test_prune(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createPrune<DynamicUnion>(),
);
