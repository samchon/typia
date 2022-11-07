import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union_explicit = _test_assert(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.assert(input),
    ObjectUnionExplicit.SPOILERS,
);
