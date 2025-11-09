import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_isClone_ObjectIntersection = (): void => _test_misc_isClone(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.misc.isClone<ObjectIntersection>(input));
