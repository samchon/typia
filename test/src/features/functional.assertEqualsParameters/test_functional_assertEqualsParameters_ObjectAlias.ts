import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsParameters_ObjectAlias =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertEqualsParameters(p),
  );
