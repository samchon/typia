import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectPartialAndRequired =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertEqualsFunction(p),
  );
