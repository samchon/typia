import TSON from "../../../src";
import { ObjectUnion } from "../../structures/ObjectUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union = _test_assert(
    "union object",
    ObjectUnion.generate,
    (input) => TSON.assert(input),
);
