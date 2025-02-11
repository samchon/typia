import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertEqualsParameters_ObjectGenericUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectGenericUnion")(
    ObjectGenericUnion,
  )((p: (input: ObjectGenericUnion) => ObjectGenericUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
