import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsParameters_DynamicUnion = (): void =>
  _test_functional_equalsParameters("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.equalsParameters(p),
  );
