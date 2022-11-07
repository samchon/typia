import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_object_union_implicit = _test_assert_type(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.assertType(input),
    ObjectUnionImplicit.SPOILERS,
);
