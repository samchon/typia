import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_object_union_explicit = _test_assert_for_of(
    "union object",
    ObjectUnionExplicit.generate,
    (input) => TSON.assertType(input),
    // GIVE UP, SOMEDAY LATER
);
