import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertParameters_ObjectAlias = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.assertParameters(p),
  );
