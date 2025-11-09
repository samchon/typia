import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertGuardCustom_ObjectDynamic = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )((input) =>
    typia.assertGuard<ObjectDynamic>(input, (p) => new CustomGuardError(p)),
  );
