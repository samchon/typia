import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUnionNonPredictable = _test_validate(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.validate(input),
    ObjectUnionNonPredictable.SPOILERS,
);