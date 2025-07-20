import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsParametersCustom_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
