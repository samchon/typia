import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsFunction_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
        typia.functional.assertEqualsFunction(p),
    );
