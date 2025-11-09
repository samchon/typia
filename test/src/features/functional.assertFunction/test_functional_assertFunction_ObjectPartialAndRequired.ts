import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertFunction_ObjectPartialAndRequired =
  (): void =>
    _test_functional_assertFunction(TypeGuardError)("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertFunction(p),
    );
