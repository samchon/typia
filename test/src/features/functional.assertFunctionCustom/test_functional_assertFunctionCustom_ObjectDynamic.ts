import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_assertFunctionCustom_ObjectDynamic = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => ObjectDynamic) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
