import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createPrune_ObjectInternal = _test_prune(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createPrune<ObjectInternal>(),
);
