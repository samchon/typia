import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsFunction_ObjectRequired = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertEqualsFunction(p),
  );
