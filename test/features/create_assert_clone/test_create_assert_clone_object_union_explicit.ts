import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_union_explicit =
    _test_assert_clone(
        "union object",
        ObjectUnionExplicit.generate,
        TSON.createAssertClone<ObjectUnionExplicit>(),
        ObjectUnionExplicit.SPOILERS,
    );
