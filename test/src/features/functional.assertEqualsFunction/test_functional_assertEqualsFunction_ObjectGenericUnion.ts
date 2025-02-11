import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsFunction_ObjectGenericUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
