import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_union_explicit = _test_assert_type(
    "union object",
    ObjectUnionExplicit.generate,
    TSON.createAssertType<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
