import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_object_union_non_predictable =
    _test_assert_stringify(
        "union object",
        ObjectUnionNonPredictable.generate,
        (input) => TSON.assertStringify(input),
        ObjectUnionNonPredictable.SPOILERS,
    );
