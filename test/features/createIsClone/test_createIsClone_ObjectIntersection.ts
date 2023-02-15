import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectIntersection = _test_isClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsClone<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
