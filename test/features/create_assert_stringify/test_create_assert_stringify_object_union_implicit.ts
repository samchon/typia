import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_union_implicit =
    _test_assert_stringify(
        "union object",
        ObjectUnionImplicit.generate,
        TSON.createAssertStringify<ObjectUnionImplicit>(),
        ObjectUnionImplicit.SPOILERS,
    );
