import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectIntersection = _test_validateParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidateParse<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
