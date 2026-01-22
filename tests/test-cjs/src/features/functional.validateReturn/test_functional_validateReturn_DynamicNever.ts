import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateReturn_DynamicNever = (): void =>
  _test_functional_validateReturn("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) =>
      typia.functional.validateReturn(p),
  );
