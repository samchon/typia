import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_assertEqualsParameters_ObjectOptional = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )((p: (input: ObjectOptional) => ObjectOptional) =>
    typia.functional.assertEqualsParameters(p),
  );
