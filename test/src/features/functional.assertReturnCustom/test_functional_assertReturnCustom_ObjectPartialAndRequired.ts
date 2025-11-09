import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertReturnCustom_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
