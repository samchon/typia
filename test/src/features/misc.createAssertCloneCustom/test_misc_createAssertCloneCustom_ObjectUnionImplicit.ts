import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_createAssertCloneCustom_ObjectUnionImplicit = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.misc.createAssertClone<ObjectUnionImplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
