import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_equals_ObjectUnionNonPredictable = _test_equals(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.equals(input),
);
