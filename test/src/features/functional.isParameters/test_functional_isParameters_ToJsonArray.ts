import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_isParameters_ToJsonArray = (): void =>
  _test_functional_isParameters("ToJsonArray")(ToJsonArray)(
    (p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.isParameters(p),
  );
