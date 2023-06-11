import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_isParse_ObjectIntersection = _test_isParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.isParse<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
