import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertReturn_ObjectRequired =
  _test_functional_assertReturn(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertReturn(p),
  );
