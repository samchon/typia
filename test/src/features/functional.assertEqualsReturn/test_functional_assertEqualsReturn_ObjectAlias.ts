import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsReturn_ObjectAlias = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => ObjectAlias) =>
    typia.functional.assertEqualsReturn(p),
  );
