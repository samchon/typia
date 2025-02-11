import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertParameters_ObjectGeneric =
  _test_functional_assertParameters(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertParameters(p),
  );
