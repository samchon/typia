import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_clone_ObjectUnionNonPredictable = _test_clone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.clone<ObjectUnionNonPredictable>(input),
);
