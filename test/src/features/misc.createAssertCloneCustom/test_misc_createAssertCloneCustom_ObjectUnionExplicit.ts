import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_createAssertCloneCustom_ObjectUnionExplicit = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.misc.createAssertClone<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
