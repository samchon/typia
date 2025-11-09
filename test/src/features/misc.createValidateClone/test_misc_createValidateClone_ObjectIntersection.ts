import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createValidateClone_ObjectIntersection = (): void => _test_misc_validateClone(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.misc.createValidateClone<ObjectIntersection>());
