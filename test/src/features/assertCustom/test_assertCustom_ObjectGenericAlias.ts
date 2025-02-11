import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertCustom_ObjectGenericAlias = _test_assert(
  CustomGuardError,
)("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.assert<ObjectGenericAlias>(input, (p) => new CustomGuardError(p)),
);
