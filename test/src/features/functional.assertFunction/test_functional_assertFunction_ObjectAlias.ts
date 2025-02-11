import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertFunction_ObjectAlias =
  _test_functional_assertFunction(TypeGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertFunction(p),
  );
