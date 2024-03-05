import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertReturn_ObjectClosure =
  _test_functional_assertReturn(TypeGuardError)("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.assertReturn(p),
  );
