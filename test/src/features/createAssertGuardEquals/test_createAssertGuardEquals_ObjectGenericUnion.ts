import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertGuardEquals_ObjectGenericUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.createAssertGuardEquals<ObjectGenericUnion>(),
  );
