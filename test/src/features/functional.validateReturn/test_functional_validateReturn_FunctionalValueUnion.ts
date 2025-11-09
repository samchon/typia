import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateReturn_FunctionalValueUnion = (): void =>
  _test_functional_validateReturn("FunctionalValueUnion")(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.validateReturn(p),
  );
