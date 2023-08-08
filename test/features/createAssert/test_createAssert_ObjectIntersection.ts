import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assert_ObjectIntersection = _test_assert(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssert<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
