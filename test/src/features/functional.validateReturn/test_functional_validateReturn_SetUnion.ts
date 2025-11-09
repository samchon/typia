import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateReturn_SetUnion = (): void =>
  _test_functional_validateReturn("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) => typia.functional.validateReturn(p),
  );
