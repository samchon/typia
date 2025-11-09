import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertGuardEqualsCustom_ObjectGenericUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.createAssertGuardEquals<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
