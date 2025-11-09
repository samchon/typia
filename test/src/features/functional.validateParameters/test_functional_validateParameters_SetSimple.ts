import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateParameters_SetSimple = (): void =>
  _test_functional_validateParameters("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) =>
      typia.functional.validateParameters(p),
  );
