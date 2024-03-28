import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertGuardCustom_ObjectGenericArray = _test_assertGuard(
  CustomGuardError,
)("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.assertGuard<ObjectGenericArray>(input, (p) => new CustomGuardError(p)),
);
