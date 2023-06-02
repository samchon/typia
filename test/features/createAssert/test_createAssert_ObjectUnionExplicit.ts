import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssert_ObjectUnionExplicit = _test_assert(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssert<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
