import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertGuardEqualsCustom_ObjectIntersection = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.createAssertGuardEquals<ObjectIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
