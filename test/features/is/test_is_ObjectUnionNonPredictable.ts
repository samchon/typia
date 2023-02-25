import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionNonPredictable = _test_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.is(input),
    ObjectUnionNonPredictable.SPOILERS,
);
