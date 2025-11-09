import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_validateClone_DynamicTemplate = (): void =>
  _test_misc_validateClone("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    (input) => typia.misc.validateClone<DynamicTemplate>(input),
  );
