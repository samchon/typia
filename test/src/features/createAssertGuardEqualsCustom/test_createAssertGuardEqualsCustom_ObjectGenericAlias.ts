import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertGuardEqualsCustom_ObjectGenericAlias =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.createAssertGuardEquals<ObjectGenericAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
