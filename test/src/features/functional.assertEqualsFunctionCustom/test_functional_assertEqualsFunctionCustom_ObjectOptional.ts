import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsFunctionCustom_ObjectOptional =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ObjectOptional")(
      ObjectOptional,
    )((p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
