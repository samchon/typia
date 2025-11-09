import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_validateClone_ObjectIntersection = (): void => _test_misc_validateClone(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.misc.validateClone<ObjectIntersection>(input));
