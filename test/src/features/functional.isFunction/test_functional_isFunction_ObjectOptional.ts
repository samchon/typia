import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isFunction_ObjectOptional =
  _test_functional_isFunction("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.isFunction(p),
  );
