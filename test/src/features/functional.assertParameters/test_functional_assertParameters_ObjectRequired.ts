import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertParameters_ObjectRequired = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertParameters(p),
  );
