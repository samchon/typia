import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createIsPrune_ObjectUnionNonPredictable = _test_isPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createIsPrune<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
