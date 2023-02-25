import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectIntersection = _test_isParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createIsParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
