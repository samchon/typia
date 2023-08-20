import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assert_ObjectUnionImplicit = _test_assert(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) => typia.assert<ObjectUnionImplicit>(input),
    ObjectUnionImplicit.SPOILERS,
);
