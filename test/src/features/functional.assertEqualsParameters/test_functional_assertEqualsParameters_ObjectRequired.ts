import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertEqualsParameters_ObjectRequired =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertEqualsParameters(p),
  );
