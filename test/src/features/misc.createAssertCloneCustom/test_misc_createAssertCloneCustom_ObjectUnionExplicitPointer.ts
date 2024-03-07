import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectUnionExplicitPointer =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
    typia.misc.createAssertClone<ObjectUnionExplicitPointer>(
      (p) => new CustomGuardError(p),
    ),
  );
