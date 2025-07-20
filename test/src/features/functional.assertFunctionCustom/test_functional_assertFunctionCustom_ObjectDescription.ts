import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertFunctionCustom_ObjectDescription =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
