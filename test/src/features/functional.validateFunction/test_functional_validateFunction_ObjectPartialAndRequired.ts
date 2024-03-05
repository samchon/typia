import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateFunction_ObjectPartialAndRequired =
  _test_functional_validateFunction("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
    typia.functional.validateFunction(p),
  );
