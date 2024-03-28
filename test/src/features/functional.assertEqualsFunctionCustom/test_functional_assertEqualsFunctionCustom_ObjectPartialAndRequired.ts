import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsFunctionCustom_ObjectPartialAndRequired =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
