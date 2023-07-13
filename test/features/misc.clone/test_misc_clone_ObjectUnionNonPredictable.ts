import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_clone_ObjectUnionNonPredictable = _test_misc_clone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.misc.clone(input),
);
