import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectUnionNonPredictable = _test_clone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.clone(input),
);