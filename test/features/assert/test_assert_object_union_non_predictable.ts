import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union_non_predictable = _test_assert(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.assertType(input),
    ObjectUnionNonPredictable.SPOILERS,
);
