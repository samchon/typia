import typia from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_DynamicUndefined = _test_prune(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createPrune<DynamicUndefined>(),
);