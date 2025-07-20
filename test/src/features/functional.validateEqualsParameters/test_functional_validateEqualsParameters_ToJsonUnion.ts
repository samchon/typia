import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsParameters_ToJsonUnion = (): void =>
  _test_functional_validateEqualsParameters("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.validateEqualsParameters(p),
  );
