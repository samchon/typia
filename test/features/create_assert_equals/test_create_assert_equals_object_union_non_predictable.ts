import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_union_non_predictable =
    _test_assert_equals(
        "union object",
        ObjectUnionNonPredictable.generate,
        TSON.createAssertEquals<ObjectUnionNonPredictable>(),
    );
