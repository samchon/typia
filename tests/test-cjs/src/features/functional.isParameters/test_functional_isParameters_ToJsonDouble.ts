import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isParameters_ToJsonDouble = (): void =>
  _test_functional_isParameters("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.isParameters(p),
  );
