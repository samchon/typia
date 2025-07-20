import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsFunction_ObjectUndefined = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertEqualsFunction(p),
  );
