import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_isPrune_ObjectIntersection = (): void => _test_misc_isPrune(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.misc.isPrune<ObjectIntersection>(input));
