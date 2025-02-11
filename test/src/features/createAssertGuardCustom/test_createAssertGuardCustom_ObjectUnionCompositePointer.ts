import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssertGuardCustom_ObjectUnionCompositePointer =
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.createAssertGuard<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
  );
