import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_union_implicit =
    _test_assert_equals(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createAssertEquals<ObjectUnionImplicit>(),
    );
