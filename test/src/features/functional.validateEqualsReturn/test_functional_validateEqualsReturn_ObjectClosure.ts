import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_validateEqualsReturn_ObjectClosure =
  _test_functional_validateEqualsReturn("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.validateEqualsReturn(p),
  );
