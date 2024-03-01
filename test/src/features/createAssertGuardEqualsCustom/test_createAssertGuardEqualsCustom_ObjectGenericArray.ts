import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertGuardEqualsCustom_ObjectGenericArray =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.createAssertGuardEquals<ObjectGenericArray>(
      (p) => new CustomGuardError(p),
    ),
  );
