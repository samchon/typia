import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertGuardEqualsCustom_ObjectUnionImplicit =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.assertGuardEquals<ObjectUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
