import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUnionNonPredictable = _test_assertPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createAssertPrune<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
