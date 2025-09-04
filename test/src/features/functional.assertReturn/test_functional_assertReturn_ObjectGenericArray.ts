import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertReturn_ObjectGenericArray = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertReturn(p),
  );
