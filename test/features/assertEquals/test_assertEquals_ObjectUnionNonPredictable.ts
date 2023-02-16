import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectUnionNonPredictable = _test_assertEquals(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.assertEquals(input),
);
