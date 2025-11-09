import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertGuardEqualsCustom_ObjectGenericArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.assertGuardEquals<ObjectGenericArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
