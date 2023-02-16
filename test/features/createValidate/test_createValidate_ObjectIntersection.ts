import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectIntersection = _test_validate(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidate<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
