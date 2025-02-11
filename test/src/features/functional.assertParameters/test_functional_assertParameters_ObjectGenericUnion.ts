import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertParameters_ObjectGenericUnion =
  _test_functional_assertParameters(TypeGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertParameters(p),
  );
