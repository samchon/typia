import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuard_ObjectAlias = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    typia.createAssertGuard<ObjectAlias>(),
  );
