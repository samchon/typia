import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsFunction_ObjectSimple = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => ObjectSimple) =>
    typia.functional.assertEqualsFunction(p),
  );
