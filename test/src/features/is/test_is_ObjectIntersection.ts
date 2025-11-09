import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_is_ObjectIntersection = (): void => _test_is(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.is<ObjectIntersection>(input));
