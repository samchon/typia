import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_DynamicConstant = _test_prune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createPrune<DynamicConstant>(),
);
