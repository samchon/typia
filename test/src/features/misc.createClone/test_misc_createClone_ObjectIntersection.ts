import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createClone_ObjectIntersection = (): void => _test_misc_clone(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.misc.createClone<ObjectIntersection>());
