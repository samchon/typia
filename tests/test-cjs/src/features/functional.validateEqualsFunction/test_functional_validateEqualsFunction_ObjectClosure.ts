import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsFunction_ObjectClosure = (): void =>
  _test_functional_validateEqualsFunction("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.validateEqualsFunction(p),
  );
