import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsReturn_ToJsonDouble = (): void =>
  _test_functional_equalsReturn("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.equalsReturn(p),
  );
