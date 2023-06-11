import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createPrune_ObjectUnionExplicit = _test_prune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createPrune<ObjectUnionExplicit>(),
);
