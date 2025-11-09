import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateParameters_SetUnion = (): void =>
  _test_functional_validateParameters("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) =>
      typia.functional.validateParameters(p),
  );
