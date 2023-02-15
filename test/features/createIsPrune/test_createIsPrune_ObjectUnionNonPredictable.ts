import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectUnionNonPredictable = _test_isPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createIsPrune<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
