import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertParse_ObjectIntersection = _test_assertParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssertParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
