import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateParameters_SetAlias =
  _test_functional_validateParameters("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) =>
      typia.functional.validateParameters(p),
  );
