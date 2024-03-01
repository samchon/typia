import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_assertCloneCustom_ObjectUnionExplicit =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
    typia.misc.assertClone<ObjectUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
