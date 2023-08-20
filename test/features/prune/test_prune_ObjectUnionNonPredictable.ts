import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_prune_ObjectUnionNonPredictable = _test_prune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.prune<ObjectUnionNonPredictable>(input),
);
