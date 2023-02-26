import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createPrune_ObjectHierarchical = _test_prune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createPrune<ObjectHierarchical>(),
);
