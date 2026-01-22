import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsReturnCustom_ObjectOptional =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectOptional")(
      ObjectOptional,
    )((p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
