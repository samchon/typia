import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertEqualsCustom_ObjectGenericAlias = _test_assertEquals(
  CustomGuardError,
)("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.assertEquals<ObjectGenericAlias>(input, (p) => new CustomGuardError(p)),
);
