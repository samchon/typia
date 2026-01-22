import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_equals_DynamicTemplate = (): void =>
  _test_equals("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)((input) =>
    typia.equals<DynamicTemplate>(input),
  );
