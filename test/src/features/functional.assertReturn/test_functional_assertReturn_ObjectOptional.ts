import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectOptional =
  _test_functional_assertReturn(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertReturn(p),
  );
