import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertParameters_ObjectClosure = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertParameters(p),
  );
