import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createIsParse_ObjectIntersection = _test_isParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
