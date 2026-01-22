import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertCustom_ObjectIntersection = (): void =>
  _test_assert(CustomGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.createAssert<ObjectIntersection>((p) => new CustomGuardError(p)));
