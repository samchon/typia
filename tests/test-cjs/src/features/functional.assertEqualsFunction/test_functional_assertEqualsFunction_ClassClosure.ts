import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_assertEqualsFunction_ClassClosure = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("ClassClosure")(
    ClassClosure,
  )((p: (input: ClassClosure) => ClassClosure) =>
    typia.functional.assertEqualsFunction(p),
  );
