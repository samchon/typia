import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertFunctionCustom_ObjectInternal = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
