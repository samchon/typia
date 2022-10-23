import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_union_explicit = _test_assert(
    "union object",
    ObjectUnionExplicit.generate,
    TSON.createAssertType<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
