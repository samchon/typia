import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsParameters_ObjectClosure =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertEqualsParameters(p),
  );
