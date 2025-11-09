import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssert_ObjectAlias = (): void =>
  _test_assert(TypeGuardError)("ObjectAlias")<ObjectAlias>(ObjectAlias)(
    typia.createAssert<ObjectAlias>(),
  );
