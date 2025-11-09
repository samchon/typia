import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsReturn_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
        typia.functional.assertEqualsReturn(p),
    );
