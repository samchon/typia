import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_prune_ObjectHierarchical = _test_misc_prune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.misc.createPrune<ObjectHierarchical>(),
);
