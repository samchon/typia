import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_union_implicit = _test_assert(
    "union object",
    ObjectUnionImplicit.generate,
    TSON.createAssertType<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
