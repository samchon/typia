import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateParameters_DynamicSimple = (): void =>
  _test_functional_validateParameters("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => DynamicSimple) =>
      typia.functional.validateParameters(p),
  );
