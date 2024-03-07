import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectIntersection =
  _test_assertGuard(CustomGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(
    typia.createAssertGuard<ObjectIntersection>((p) => new CustomGuardError(p)),
  );
