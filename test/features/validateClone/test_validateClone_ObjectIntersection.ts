import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectIntersection = _test_validateClone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.validateClone(input),
    ObjectIntersection.SPOILERS,
);
