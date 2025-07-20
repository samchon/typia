import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertEquals_FunctionalObjectUnion = (): void =>
  _test_assertEquals(TypeGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createAssertEquals<FunctionalObjectUnion>(),
  );
