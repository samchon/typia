import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertEqualsCustom_TypeTagObjectUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.createAssertEquals<TypeTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
