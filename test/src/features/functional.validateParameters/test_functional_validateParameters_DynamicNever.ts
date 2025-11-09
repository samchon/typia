import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_validateParameters_DynamicNever = (): void =>
  _test_functional_validateParameters("DynamicNever")(DynamicNever)(
    (p: (input: DynamicNever) => DynamicNever) =>
      typia.functional.validateParameters(p),
  );
