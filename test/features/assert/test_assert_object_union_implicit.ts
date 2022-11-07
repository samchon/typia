import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union_implicit = _test_assert(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.assert(input),
    ObjectUnionImplicit.SPOILERS,
);
