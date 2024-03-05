import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateReturn_ObjectUnionDouble =
  _test_functional_validateReturn("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.validateReturn(p),
  );
