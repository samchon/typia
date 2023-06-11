import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_ObjectIntersection = _test_assertClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createAssertClone<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
