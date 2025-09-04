import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssert_ObjectDynamic = (): void =>
  _test_assert(TypeGuardError)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    typia.createAssert<ObjectDynamic>(),
  );
