import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_functional_isParameters_DynamicTemplate = (): void =>
  _test_functional_isParameters("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => DynamicTemplate) =>
      typia.functional.isParameters(p),
  );
