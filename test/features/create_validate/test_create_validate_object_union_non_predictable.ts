import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_union_non_predictable = _test_validate(
    "union object",
    ObjectUnionNonPredictable.generate,
    TSON.createValidate<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
