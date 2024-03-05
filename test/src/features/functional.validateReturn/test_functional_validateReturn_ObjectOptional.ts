import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateReturn_ObjectOptional =
  _test_functional_validateReturn("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.validateReturn(p),
  );
