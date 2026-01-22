import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertGuardEqualsCustom_ObjectUnionExplicit = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
    typia.assertGuardEquals<ObjectUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
