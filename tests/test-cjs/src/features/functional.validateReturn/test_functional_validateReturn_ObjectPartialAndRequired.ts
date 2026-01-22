import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateReturn_ObjectPartialAndRequired =
  (): void =>
    _test_functional_validateReturn("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.validateReturn(p),
    );
