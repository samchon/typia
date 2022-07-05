import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_object_union_implicit = _test_assert_for_of(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.assertType(input),
    // GIVE UP, SOMEDAY LATER
);
