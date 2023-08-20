import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertPrune_ObjectUnionNonPredictable = _test_assertPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.assertPrune<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
