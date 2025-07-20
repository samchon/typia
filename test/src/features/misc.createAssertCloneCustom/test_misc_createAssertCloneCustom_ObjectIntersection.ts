import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createAssertCloneCustom_ObjectIntersection = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.misc.createAssertClone<ObjectIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
