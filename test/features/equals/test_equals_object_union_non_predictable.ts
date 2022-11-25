import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_union_non_predictable = _test_equals(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.equals(input),
);
