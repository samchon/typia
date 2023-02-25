import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectIntersection = _test_assertPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssertPrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
