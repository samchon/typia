import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ObjectUnionNonPredictable = _test_isPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.isPrune(input),
    ObjectUnionNonPredictable.SPOILERS,
);
