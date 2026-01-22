import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateReturn_ArrayRepeatedOptional = (): void =>
  _test_functional_validateReturn("ArrayRepeatedOptional")(
    ArrayRepeatedOptional,
  )((p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
    typia.functional.validateReturn(p),
  );
