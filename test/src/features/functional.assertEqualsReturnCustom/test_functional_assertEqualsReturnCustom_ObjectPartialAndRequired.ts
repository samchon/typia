import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectPartialAndRequired =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
