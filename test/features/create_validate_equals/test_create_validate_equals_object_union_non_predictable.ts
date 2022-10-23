import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_object_union_non_predictable =
    _test_validate_equals(
        "union object",
        ObjectUnionNonPredictable.generate,
        TSON.createValidateEquals<ObjectUnionNonPredictable>(),
    );
