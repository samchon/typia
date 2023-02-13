import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectUnionNonPredictable = _test_validatePrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createValidatePrune<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);