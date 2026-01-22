import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertFunction_ObjectOptional = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertFunction(p),
  );
