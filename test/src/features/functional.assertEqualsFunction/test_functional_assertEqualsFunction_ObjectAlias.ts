import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsFunction_ObjectAlias =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertEqualsFunction(p),
  );
