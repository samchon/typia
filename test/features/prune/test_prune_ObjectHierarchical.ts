import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ObjectHierarchical = _test_prune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.prune(input),
);
