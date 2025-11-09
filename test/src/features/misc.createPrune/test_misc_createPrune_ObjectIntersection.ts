import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createPrune_ObjectIntersection = (): void => _test_misc_prune(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.misc.createPrune<ObjectIntersection>());
