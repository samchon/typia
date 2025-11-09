import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertEqualsCustom_ObjectGenericUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.createAssertEquals<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
