import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_union_implicit =
    _test_assert_clone(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createAssertClone<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
