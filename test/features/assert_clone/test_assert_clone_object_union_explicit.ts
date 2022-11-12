import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_union_explicit = _test_assert_clone(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.assertClone(input),
    ObjectUnionExplicit.SPOILERS,
);
