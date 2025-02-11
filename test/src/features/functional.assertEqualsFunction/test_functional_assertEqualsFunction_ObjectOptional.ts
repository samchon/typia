import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsFunction_ObjectOptional =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertEqualsFunction(p),
  );
