import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertFunctionCustom_ObjectOptional =
  _test_functional_assertFunction(CustomGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
