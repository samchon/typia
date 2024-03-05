import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createAssertGuardCustom_ObjectUnionExplicitPointer =
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.createAssertGuard<ObjectUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
