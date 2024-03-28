import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertParameters_ObjectOptional =
  _test_functional_assertParameters(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertParameters(p),
  );
