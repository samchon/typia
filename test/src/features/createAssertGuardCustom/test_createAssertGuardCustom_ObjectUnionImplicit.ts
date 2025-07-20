import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertGuardCustom_ObjectUnionImplicit = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.createAssertGuard<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
