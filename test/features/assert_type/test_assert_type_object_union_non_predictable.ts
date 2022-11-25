import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_union_non_predictable = _test_assert_type(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.assertType(input),
    ObjectUnionNonPredictable.SPOILERS,
);
