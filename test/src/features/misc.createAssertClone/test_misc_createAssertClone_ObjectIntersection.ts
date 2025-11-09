import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createAssertClone_ObjectIntersection = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.misc.createAssertClone<ObjectIntersection>(),
  );
