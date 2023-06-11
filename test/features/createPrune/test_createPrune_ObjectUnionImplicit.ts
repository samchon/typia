import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createPrune_ObjectUnionImplicit = _test_prune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createPrune<ObjectUnionImplicit>(),
);
