import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertParametersCustom_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
