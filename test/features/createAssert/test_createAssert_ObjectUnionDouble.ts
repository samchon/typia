import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssert_ObjectUnionDouble = _test_assert(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createAssert<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
