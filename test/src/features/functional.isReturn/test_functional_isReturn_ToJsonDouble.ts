import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isReturn_ToJsonDouble = (): void =>
  _test_functional_isReturn("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) => typia.functional.isReturn(p),
  );
