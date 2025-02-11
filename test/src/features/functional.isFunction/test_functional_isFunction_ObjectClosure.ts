import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_isFunction_ObjectClosure =
  _test_functional_isFunction("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.isFunction(p),
  );
