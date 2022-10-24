import TSON from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_union_explicit =
    _test_assert_stringify(
        "union object",
        ObjectUnionExplicit.generate,
        (input) => TSON.assertStringify(input),
        ObjectUnionExplicit.SPOILERS,
    );
