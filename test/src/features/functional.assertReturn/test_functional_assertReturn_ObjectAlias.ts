import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertReturn_ObjectAlias =
  _test_functional_assertReturn(TypeGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertReturn(p),
  );
