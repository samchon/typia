import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssert_ObjectGeneric = (): void =>
  _test_assert(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.createAssert<ObjectGeneric>(),
  );
