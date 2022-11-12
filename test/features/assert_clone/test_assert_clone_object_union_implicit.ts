import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_union_implicit = _test_assert_clone(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.assertClone(input),
    ObjectUnionImplicit.SPOILERS,
);
