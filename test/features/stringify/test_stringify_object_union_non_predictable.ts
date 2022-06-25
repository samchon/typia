import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_union_non_predictable = _test_stringify(
    "union object",
    ObjectUnionNonPredictable.generate(),
    (input) => TSON.stringify(input),
);
