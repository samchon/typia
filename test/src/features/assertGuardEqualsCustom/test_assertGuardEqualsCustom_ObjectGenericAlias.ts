import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertGuardEqualsCustom_ObjectGenericAlias =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.assertGuardEquals<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
