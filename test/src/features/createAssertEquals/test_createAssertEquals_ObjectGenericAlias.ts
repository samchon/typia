import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertEquals_ObjectGenericAlias = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )(typia.createAssertEquals<ObjectGenericAlias>());
