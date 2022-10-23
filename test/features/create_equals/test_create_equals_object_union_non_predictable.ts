import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_union_non_predictable = _test_equals(
    "union object",
    ObjectUnionNonPredictable.generate,
    TSON.createEquals<ObjectUnionNonPredictable>(),
);
