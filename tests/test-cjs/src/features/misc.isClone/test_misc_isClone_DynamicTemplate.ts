import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_misc_isClone_DynamicTemplate = (): void =>
  _test_misc_isClone("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)(
    (input) => typia.misc.isClone<DynamicTemplate>(input),
  );
