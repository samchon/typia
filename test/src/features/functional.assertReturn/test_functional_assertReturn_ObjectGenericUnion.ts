import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertReturn_ObjectGenericUnion =
  _test_functional_assertReturn(TypeGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertReturn(p),
  );
