import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectUnionImplicit =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.misc.assertClone<ObjectUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
