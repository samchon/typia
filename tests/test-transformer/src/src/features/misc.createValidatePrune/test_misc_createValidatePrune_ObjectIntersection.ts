import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createValidatePrune_ObjectIntersection = (): void => _test_misc_validatePrune(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.misc.createValidatePrune<ObjectIntersection>());
