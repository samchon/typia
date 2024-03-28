import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertReturn_ObjectGeneric =
  _test_functional_assertReturn(TypeGuardError)("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.assertReturn(p),
  );
