import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertGuard_ObjectGenericAlias = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )(typia.createAssertGuard<ObjectGenericAlias>());
