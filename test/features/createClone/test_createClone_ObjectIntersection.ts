import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectIntersection = _test_clone(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createClone<ObjectIntersection>(),
);
