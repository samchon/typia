import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssertCustom_ObjectDynamic = (): void =>
  _test_assert(CustomGuardError)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    typia.createAssert<ObjectDynamic>((p) => new CustomGuardError(p)),
  );
