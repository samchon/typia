import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_assertPrune_ObjectUnionNonPredictable = _test_assertPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.assertPrune(input),
    ObjectUnionNonPredictable.SPOILERS,
);
