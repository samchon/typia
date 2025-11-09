import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertReturn_ObjectPrimitive = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertReturn(p),
  );
