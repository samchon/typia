import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertGuardCustom_ObjectGenericAlias = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) =>
    typia.assertGuard<ObjectGenericAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
