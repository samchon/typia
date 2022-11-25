import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_union_non_predictable =
    _test_validate_equals(
        "union object",
        ObjectUnionNonPredictable.generate,
        (input) => TSON.validateEquals(input),
    );
