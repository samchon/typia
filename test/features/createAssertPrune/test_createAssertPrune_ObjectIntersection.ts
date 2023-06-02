import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertPrune_ObjectIntersection = _test_assertPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssertPrune<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
