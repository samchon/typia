import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_assertCloneCustom_ObjectIntersection =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.misc.assertClone<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
