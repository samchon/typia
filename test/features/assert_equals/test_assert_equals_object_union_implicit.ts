import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_union_implicit = _test_assert_equals(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.assertEquals(input),
);
