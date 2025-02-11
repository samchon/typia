import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_equalsReturn_ObjectPartialAndRequired =
  _test_functional_equalsReturn("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
    typia.functional.equalsReturn(p),
  );
