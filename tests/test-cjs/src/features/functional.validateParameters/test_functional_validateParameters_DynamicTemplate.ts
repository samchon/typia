import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_validateParameters_DynamicTemplate = (): void =>
  _test_functional_validateParameters("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.validateParameters(p),
  );
