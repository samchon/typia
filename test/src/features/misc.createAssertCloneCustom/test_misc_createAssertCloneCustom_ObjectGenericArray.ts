import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createAssertCloneCustom_ObjectGenericArray =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.misc.createAssertClone<ObjectGenericArray>(
      (p) => new CustomGuardError(p),
    ),
  );
