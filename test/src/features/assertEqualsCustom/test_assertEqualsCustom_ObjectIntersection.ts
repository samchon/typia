import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_assertEqualsCustom_ObjectIntersection = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.assertEquals<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
