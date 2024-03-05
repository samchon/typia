import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createAssertCloneCustom_ObjectGenericUnion =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.misc.createAssertClone<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
