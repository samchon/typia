import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectIntersection = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.misc.assertClone<ObjectIntersection>(input, (p) => new CustomGuardError(p)));
