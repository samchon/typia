import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectIntersection = _test_validateEquals(
    "ObjectIntersection",
    ObjectIntersection.generate,
    typia.createValidateEquals<ObjectIntersection>(),
);
