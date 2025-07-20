import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertFunction_ObjectGenericUnion = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertFunction(p),
  );
