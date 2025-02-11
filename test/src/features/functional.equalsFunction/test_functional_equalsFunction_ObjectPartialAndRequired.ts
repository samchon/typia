import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_equalsFunction_ObjectPartialAndRequired =
  _test_functional_equalsFunction("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
    typia.functional.equalsFunction(p),
  );
