import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertEquals_FunctionalPropertyUnion =
  _test_assertEquals(TypeGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createAssertEquals<FunctionalPropertyUnion>(),
  );
