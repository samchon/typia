import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertEqualsReturn_ObjectPrimitive = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertEqualsReturn(p),
  );
