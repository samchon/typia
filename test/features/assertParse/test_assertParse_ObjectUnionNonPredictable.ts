import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectUnionNonPredictable = _test_assertParse(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.assertParse<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
