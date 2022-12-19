import typia from "../../../src";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUnionExplicit = _test_assert(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssert<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);