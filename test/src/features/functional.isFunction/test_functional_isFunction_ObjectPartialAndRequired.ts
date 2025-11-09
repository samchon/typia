import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_isFunction_ObjectPartialAndRequired = (): void =>
  _test_functional_isFunction("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
    typia.functional.isFunction(p),
  );
