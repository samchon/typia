import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsParameters_ObjectPartialAndRequired =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectPartialAndRequired",
  )(ObjectPartialAndRequired)(
    (p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.assertEqualsParameters(p),
  );
