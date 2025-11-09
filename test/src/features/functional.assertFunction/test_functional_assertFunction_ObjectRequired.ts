import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertFunction_ObjectRequired = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertFunction(p),
  );
