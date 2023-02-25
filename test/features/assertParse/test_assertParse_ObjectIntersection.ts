import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectIntersection = _test_assertParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assertParse<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
