import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectUnionNonPredictable = _test_assert(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.assert(input),
    ObjectUnionNonPredictable.SPOILERS,
);