import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createPrune_DynamicConstant = _test_prune(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createPrune<DynamicConstant>(),
);
