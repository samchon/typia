import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsReturn_ObjectOptional = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertEqualsReturn(p),
  );
