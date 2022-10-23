import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validate } from "./_test_validate";

export const test_validate_object_union_non_predictable = _test_validate(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.validate(input),
    ObjectUnionNonPredictable.SPOILERS,
);
