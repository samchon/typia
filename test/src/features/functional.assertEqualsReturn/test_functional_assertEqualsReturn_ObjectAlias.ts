import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectAlias =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertEqualsReturn(p),
  );
