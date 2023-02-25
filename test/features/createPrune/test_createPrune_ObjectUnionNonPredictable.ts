import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectUnionNonPredictable = _test_prune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createPrune<ObjectUnionNonPredictable>(),
);
