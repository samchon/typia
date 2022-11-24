import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_union_implicit = _test_assert_type(
    "union object",
    ObjectUnionImplicit.generate,
    TSON.createAssertType<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
