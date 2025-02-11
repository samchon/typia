import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertParametersAsync_ObjectClosure =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertParameters(p),
  );
