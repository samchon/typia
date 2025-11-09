import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsParameters_ToJsonDouble = (): void =>
  _test_functional_equalsParameters("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.equalsParameters(p),
  );
