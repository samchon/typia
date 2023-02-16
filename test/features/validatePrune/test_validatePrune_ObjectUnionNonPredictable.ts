import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ObjectUnionNonPredictable = _test_validatePrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.validatePrune(input),
    ObjectUnionNonPredictable.SPOILERS,
);
