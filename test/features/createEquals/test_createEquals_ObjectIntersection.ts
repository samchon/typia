import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectIntersection = _test_equals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createEquals<ObjectIntersection>(),
);
