import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_union_explicit =
    _test_assert_stringify(
        "union object",
        ObjectUnionExplicit.generate,
        TSON.createAssertStringify<ObjectUnionExplicit>(),
        ObjectUnionExplicit.SPOILERS,
    );
