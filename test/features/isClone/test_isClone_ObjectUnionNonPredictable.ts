import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUnionNonPredictable = _test_isClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.isClone(input),
    ObjectUnionNonPredictable.SPOILERS,
);
