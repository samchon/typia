import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsParameters_ClassClosure = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsParameters(p),
  );
