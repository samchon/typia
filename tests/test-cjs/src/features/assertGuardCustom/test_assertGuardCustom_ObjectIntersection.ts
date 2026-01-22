import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertGuardCustom_ObjectIntersection = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) =>
    typia.assertGuard<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
