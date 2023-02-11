import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectUnionExplicit = _test_prune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createPrune<ObjectUnionExplicit>(),
);