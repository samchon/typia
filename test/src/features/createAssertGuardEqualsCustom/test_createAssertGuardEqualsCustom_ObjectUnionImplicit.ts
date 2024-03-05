import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertGuardEqualsCustom_ObjectUnionImplicit =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.createAssertGuardEquals<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
