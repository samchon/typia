import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUnionNonPredictable = _test_assertClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.assertClone(input),
    ObjectUnionNonPredictable.SPOILERS,
);
