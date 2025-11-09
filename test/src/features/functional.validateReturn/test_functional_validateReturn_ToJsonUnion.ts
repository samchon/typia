import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateReturn_ToJsonUnion = (): void =>
  _test_functional_validateReturn("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.validateReturn(p),
  );
