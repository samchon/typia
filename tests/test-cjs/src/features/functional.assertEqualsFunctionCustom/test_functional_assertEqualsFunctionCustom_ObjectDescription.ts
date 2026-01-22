import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsFunctionCustom_ObjectDescription =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ObjectDescription",
    )(ObjectDescription)((p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
