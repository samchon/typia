import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsParameters_ObjectGeneric =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertEqualsParameters(p),
  );
