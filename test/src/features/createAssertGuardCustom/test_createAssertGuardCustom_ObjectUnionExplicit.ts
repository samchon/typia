import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createAssertGuardCustom_ObjectUnionExplicit = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.createAssertGuard<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
