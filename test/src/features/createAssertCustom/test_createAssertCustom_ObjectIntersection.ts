import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectIntersection = (): void => _test_assert(CustomGuardError)(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.createAssert<ObjectIntersection>((p) => new CustomGuardError(p)));
