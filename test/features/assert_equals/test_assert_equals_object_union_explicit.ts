import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_union_explicit = _test_assert_equals(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.assertEquals(input),
);
