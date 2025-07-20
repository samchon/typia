import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertEqualsCustom_ObjectGenericUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.assertEquals<ObjectGenericUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
